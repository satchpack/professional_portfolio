function toggleMenu() { document.getElementById('dropdown').classList.toggle('hidden'); }
function handleNav(pageId) { toggleMenu(); navigateTo(pageId); }

function toggleDiagnostics() {
    const panel = document.getElementById('diagnostics-panel');
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
        runDiagnostics();
    }
}

function resolveImagePath(path) {
    if (!path) return '';
    return encodeURI(path);
}

function isVideo(path) {
    if (!path) return false;
    const extension = path.split('.').pop().toLowerCase();
    return ['mp4', 'webm', 'ogg', 'mov'].includes(extension);
}

function isYouTube(path) {
    if (!path) return false;
    return path.includes('youtube.com') || path.includes('youtu.be');
}

function getYouTubeEmbedUrl(path) {
    let videoId = '';
    if (path.includes('youtu.be/')) {
        videoId = path.split('youtu.be/')[1].split(/[?#]/)[0];
    } else if (path.includes('v=')) {
        videoId = path.split('v=')[1].split('&')[0];
    } else if (path.includes('embed/')) {
        videoId = path.split('embed/')[1].split(/[?#]/)[0];
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1`;
}
function renderExperience() {
    const content = document.getElementById('app-content');
    if (!window.experienceData) {
        content.innerHTML = "<p>Experience data loading...</p>";
        return;
    }

    let html = `
        <h2 class="text-center text-xl font-black text-black mb-16 uppercase tracking-widest">Experience</h2>
        <section class="timeline space-y-16 max-w-6xl mx-auto relative">
            <div class="absolute left-[240px] top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
    `;

    Object.keys(window.experienceData).forEach(key => {
        const exp = window.experienceData[key];
        html += `
            <article class="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-12 items-start relative group">
                <div class="md:text-right pt-1 pr-6">
                    <h1 class="text-sm font-black uppercase tracking-tight text-black mb-1">${exp.role}</h1>
                    <time class="block text-[10px] font-bold uppercase tracking-widest text-gray-500" datetime="${exp.duration}">${exp.duration}</time>
                    
                    <div class="w-3 h-3 bg-white border-2 border-black rounded-full absolute left-[234px] top-1 hidden md:block group-hover:scale-125 transition-transform"></div>
                </div>

                <div class="border border-gray-200 p-8 hover:border-black transition-all bg-white">
                    <p class="text-xs font-black text-black uppercase tracking-widest mb-4">${exp.company}</p>
                    <hr class="border-t border-gray-100 mb-6"/>
                    <ul class="list-none space-y-3 text-gray-600 font-light leading-relaxed">
                        ${exp.details.map(d => `<li class="flex items-start gap-3"><span class="mt-2 block w-1 h-1 bg-black rounded-full"></span>${d}</li>`).join('')}
                    </ul>
                </div>
            </article>
        `;
    });

    html += `</section>`;
    content.innerHTML = html;
}



function renderAbout() {
    const content = document.getElementById('app-content');
    if (!window.aboutData) {
        content.innerHTML = "<p>About data loading...</p>";
        return;
    }

    const d = window.aboutData;
    const bioParagraphs = Array.isArray(d.bio) ? d.bio : [d.bio];

    content.innerHTML = `
        <div class="max-w-5xl mx-auto px-6 py-16">
            <h2 class="text-center text-5xl font-bold text-black-400 mb-16 uppercase tracking-widest">About</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-16 items-start">
                <div class="space-y-8">
                    <div class="space-y-6 text-gray-700 leading-relaxed text-lg lg:text-xl font-normal">
                        ${bioParagraphs.map(p => `<p>${p}</p>`).join('')}
                    </div>

                    <div class="pt-8 border-t border-gray-200">
                        <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Contact</p>
                        <a href="mailto:${d.contact}" class="text-lg font-medium text-black hover:underline">${d.contact}</a>
                    </div>
                </div>

                <div class="relative w-64 h-64 rounded-full border-4 border-black overflow-hidden shadow-xl">
    <img src="${d.image || 'https://placehold.co/400x400/f3f4f6/374151?text=Me'}" 
         alt="Profile" 
         class="absolute w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
         style="left: -18px;"> </div>
                </div>
            </div>
        </div>
    `;
}

function renderMediaElement(src, className, title, isHero) {
    if (!src) return ''; // Add a safety check here

    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = src.match(youtubeRegex);

    if (match) {
        const videoId = match[1];
        return `
            <iframe 
                class="${className}" 
                src="https://www.youtube.com/embed/${videoId}" 
                title="${title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
    }

    // Default to Image rendering
    return `<img src="${src}" alt="${title}" class="${className}" loading="lazy">`;
}

const failedAssets = new Set();
function logAssetError(path, type) {
    if (type === 'youtube') return;
    failedAssets.add(path);
    console.warn(`[Diagnostic Error] Failed to load local ${type}: ${path}`);
    if (!document.getElementById('diagnostics-panel').classList.contains('hidden')) {
        runDiagnostics();
    }
}

function runDiagnostics() {
    const log = document.getElementById('diagnostics-log');
    log.innerHTML = '';
    
    Object.keys(window.projectsData).forEach(key => {
        const p = window.projectsData[key];
        const pathsToCheck = [];
        if (p.image && !p.noImages) pathsToCheck.push({ path: p.image, label: 'Main Grid Cover' });
        if (p.images) {
            p.images.forEach((img, index) => {
                pathsToCheck.push({ path: img, label: `Gallery Media #${index + 1}` });
            });
        }

        let projectLog = `<div class="mb-3"><span class="font-bold text-black">${p.title}:</span><ul class="list-disc pl-5 mt-1 space-y-1">`;
        pathsToCheck.forEach(item => {
            const isFailed = failedAssets.has(item.path);
            const isYt = isYouTube(item.path);
            const statusColor = isYt ? 'text-blue-600' : (isFailed ? 'text-red-500' : 'text-green-600');
            const statusSymbol = isYt ? '✓ YouTube Link' : (isFailed ? '❌ Failed' : '✓ Loaded/Ready');
            
            projectLog += `
                <li>
                    <span class="text-gray-500">[${item.label}]</span> 
                    <span class="font-mono">${item.path}</span> -> 
                    <span class="${statusColor} font-bold">${statusSymbol}</span>
                    ${isFailed ? `<br><span class="text-gray-400 pl-4 block">Action: Create folder/file at exactly <strong>${item.path}</strong>. Check extension case sensitivity (.jpg vs .JPG).</span>` : ''}
                </li>`;
        });
        projectLog += `</ul></div>`;
        log.innerHTML += projectLog;
    });
}
function navigateTo(pageId, projectKey = null) {
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active-link'));
    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) activeNav.classList.add('active-link');
    
    const content = document.getElementById('app-content');
    
    // 1. Clear content
    content.innerHTML = ""; 

    // 2. Routing logic (Calls functions that set their own innerHTML)
    if (pageId === 'home') {
        renderHome();
    } else if (pageId === 'projects') {
        content.innerHTML = `<section class="max-w-[1400px] mx-auto px-6 py-16">...</section>`;
        renderProjectGrid();
    } else if (pageId === 'project-detail') {
        renderProjectDetail(projectKey);
    } else if (pageId === 'experience') {
        renderExperience();
    } else if (pageId === 'about') {
        renderAbout();
    } else if (pageId === 'resume') {
        renderResume();
    } else {
        // This ONLY runs if pageId is not home, projects, detail, exp, about, or resume
        content.innerHTML = `<h2 class="text-2xl font-bold">Page not found</h2>`;
    }
    
    // 3. FIX: Create a container for the footer and append it
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = renderFooter();
    content.appendChild(footerContainer);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderHero() {
    const content = document.getElementById('app-content');
    
    // We inject this HTML into the home view
    return `
        <section class="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-6xl md:text-8xl font-black text-black tracking-tighter mb-8">
                    Satchel<br>Schiavo
                </h1>
                <p class="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8">
                    Mechanical Engineer studying at Olin College. Designing and building creative mechanical and robotic systems that solves real world problems.
                </p>
                <div class="flex gap-4">
                    <button onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'})" 
                            class="bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition">View Projects</button>
                </div>
            </div>
            
            <div class="relative">
                <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img src="assets/images/Header/HeroPage3.jpg" 
                         alt="Satchel Schiavo" 
                         class="w-full h-full object-cover">
                </div>
                <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-100 -z-10 rounded-lg"></div>
            </div>
        </section>
    `;
}
function renderFooter() {
    return `
        <footer class="max-w-[1400px] mx-auto px-6 py-16 mt-16 border-t border-gray-200">
            <div class="flex flex-row justify-center items-center gap-x-12">
                
                <div>
                    <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email</p>
                    <a href="mailto:${window.aboutData.contact}" class="text-lg font-medium text-black hover:underline">
                        ${window.aboutData.contact}
                    </a>
                </div>

                <div>
                    <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                    <a href="tel:+16172833456" class="text-lg font-medium text-black hover:underline">
                        (617) 283-2097
                    </a>
                </div>

                <a href="https://www.linkedin.com/in/satchel-schiavo-874b5b272/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="text-gray-400 hover:text-black transition-colors duration-300 flex items-end">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                </a>
            </div>
        </footer>
    `;
}
function renderHome() {
    const content = document.getElementById('app-content');
    
    // Combine the new Hero and the Project grid
    content.innerHTML = renderHero() + `
        <section id="projects" class="w-full px-6 py-16">
            <h2 class="text-center text-xl font-black text-black mb-12 uppercase tracking-widest">Selected Projects</h2>
            <div id="project-grid" class="grid grid-cols-3 gap-8"></div>
        </section>
    `;
    
    renderProjectGrid(); 
}
function renderProjectGrid() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    Object.entries(window.projectsData).forEach(([key, p]) => {
        const hasImage = p.image && !p.noImages;

        grid.innerHTML += `
            <div onclick="navigateTo('project-detail', '${key}')" class="group cursor-pointer">
                <div class="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                    ${hasImage ? 
                        renderMediaElement(p.image, "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", p.title, false) 
                        : `
                        <div class="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-4 text-center">
                            <span class="font-bold text-lg text-black leading-tight">${p.title}</span>
                        </div>`}
                    
                    <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                        <div class="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span class="font-black text-xl uppercase tracking-widest block mb-2">${p.title}</span>
                            <span class="text-[10px] uppercase tracking-widest font-bold opacity-70">${p.desc}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderProjectDetail(key) {
    const p = window.projectsData[key];
    const content = document.getElementById('app-content');
    
    if (!p) return;

    // 1. Generate "Up Next" grid (3 projects)
    const allKeys = Object.keys(window.projectsData);
    const currentIdx = allKeys.indexOf(key);
    const nextProjectKeys = [1, 2, 3].map(i => allKeys[(currentIdx + i) % allKeys.length]);
    
    const nextBannerHtml = `
        <div class="mt-24 pt-16 border-t border-black">
            <h3 class="text-center text-xs font-black uppercase text-gray-400 mb-10">Up Next</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${nextProjectKeys.map(nextKey => {
                    const nextP = window.projectsData[nextKey];
                    return `
                        <div onclick="navigateTo('project-detail', '${nextKey}')" 
                             class="group relative cursor-pointer overflow-hidden rounded-2xl h-64 z-10">
                            ${renderMediaElement(nextP.image, "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", nextP.title, false)}
                            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                            <div class="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                <span class="text-white text-center font-black uppercase tracking-widest">${nextP.title}</span>
                            </div>
                        </div>`;
                }).join('')}
            </div>
        </div>`;

    // 2. Render Page Content
    content.innerHTML = `
        <div class="w-full px-4 md:px-8 xl:px-12 py-16">
            <button onclick="navigateTo('home')" class="mb-12 text-black font-black uppercase tracking-widest text-[10px] hover:underline flex items-center gap-2">&larr; Back to Projects</button>
            
            <div class="border-b border-black pb-12 mb-16 w-full">
                <span class="text-xs uppercase text-gray-400 font-bold tracking-widest">${p.desc}</span>
                <h2 class="text-7xl font-black text-black uppercase mt-4 mb-6">${p.title}</h2>
                <p class="text-2xl text-gray-600 font-light w-full max-w-5xl">${p.subtitle}</p>
            </div>
            
            <div class="w-full rounded-2xl overflow-hidden mb-16 shadow-lg">
                ${renderMediaElement(p.image, "w-full h-auto object-cover", p.title, true)}
            </div>
            
            <div class="w-full space-y-16">
                ${p.sections.map(item => {
                    if (item.type === 'text') {
                        return `
                            <div class="w-full">
                                <h3 class="font-black uppercase text-sm mb-4 border-l-4 border-black pl-6">${item.header}</h3>
                                <p class="text-gray-700 leading-relaxed text-lg lg:text-xl w-full max-w-6xl">${item.content}</p>
                            </div>`;
                    } 
                    if (item.type === 'video') {
    return `
        <div class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
            ${renderMediaElement(item.path, "w-full h-full", "Project Video", false)}
        </div>`;
}
                    if (item.type === 'image' || item.type === 'video') {
                        return `
                            <div class="w-full rounded-2xl overflow-hidden ${item.type === 'video' ? 'aspect-video' : ''}">
                                ${renderMediaElement(item.path, "w-full h-auto object-cover", "Project Media", false)}
                            </div>`;
                    }
                   // Updated Grid Layout (Side-by-side, no cropping)
if (item.type === 'grid-image') {
    return `
    
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-start">
            ${item.paths.map(path => `
                <div class="w-full">
                    ${renderMediaElement(path, "w-full h-auto object-contain rounded-2xl", "Grid Image", false)}
                </div>
            `).join('')}
        </div>`;
}
                    if (item.type === 'grid-3') {
   return `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-start">
            ${item.paths.map(path => `
                <div class="w-full">
                    ${renderMediaElement(path, "w-full h-auto object-contain rounded-2xl", "Triptych Image", false)}
                </div>
            `).join('')}
        </div>`;
}
                    return '';
                }).join('')}
            </div>
            
            ${nextBannerHtml}
        </div>
    `;
}
window.onload = () => navigateTo('home');