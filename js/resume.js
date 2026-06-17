function renderResume() {
    const content = document.getElementById('app-content');
    const pdfPath = 'assets/images/Resume/Resume for Portfolio.pdf'; 

    content.innerHTML = `
        <div class="w-full px-4 md:px-12 py-16 flex flex-col items-center">
            <button onclick="navigateTo('home')" class="mb-8 text-black font-black uppercase tracking-widest text-[10px] hover:underline">&larr; Back Home</button>
            <div class="w-full max-w-5xl h-[70vh] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <iframe src="${pdfPath}" class="w-full h-full border-none" title="Resume"></iframe>
            </div>
        </div>
    `;
}