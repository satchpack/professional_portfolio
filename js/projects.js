
window.projectsData = {
            p1: { 
                title: "Amazon Robotics", 
                desc: "Capstone", 
                image: "assets/images/AmazonRobotics.jpg", 
                nda: true, 
                subtitle: "Robotic Systems Engineering & Fixture Design Co-op",
                sections: [
                { type: "text", header: "overview", content: "Selected as one of five senior engineers to participate in Olin College's year-long SCOPE program in collaboration with Amazon Robotics. The project focused on identifying cost-effective perception solutions for autonomous outdoor robotic systems, balancing sensing performance, environmental robustness, and overall deployment cost. ", },
                { type: "image", path: "assets/images/AmazonRobo/AlgorithmOvrview.png" },
                { type: "text", header: "Responsibilities", content: "Working directly with Amazon Robotics engineers, our team was tasked with developing a framework for evaluating cameras, LiDAR, radar, and localization sensors against performance metrics relevant to autonomous navigation. Rather than being provided a predefined evaluation methodology, we were responsible for determining which metrics best characterized system performance, justifying those choices, and defending our conclusions through multiple technical design reviews." },
                {type: "grid-3", paths: ["assets/images/AmazonRobo/Detection.png", "assets/images/AmazonRobo/PanoramicStitching.png", "assets/images/AmazonRobo/PredictionImage.png"]},
                { type: "text", header: "Deliverable:", content: "The final evaluation framework compared six distinct camera systems, which incorporated two LiDAR platforms, two stereo-camera solutions, and monocular depth-estimation approaches across a variety of perception tasks. Sensor configurations were benchmarked on depth-estimation accuracy, object detection performance, object tracking reliability, and overall system robustness, allowing us to evaluate tradeoffs between performance, environmental resilience, computational complexity, and deployment cost.", } ,
                 { type: "image", path: "assets/images/AmazonRobo/RealWorldTesting.png" },
                { type: "text", header: "Challenge:", content: "A major engineering challenge was integrating sensors with significantly different update rates, fields of view, noise characteristics, depth-estimation capabilities, and failure modes while maintaining reliable perception performance. In addition, our team had to balance detection accuracy, tracking stability, prediction quality, computational cost, and system complexity across a custom-built autonomy stack. Through simulation and testing, we evaluated how different sensing architectures influenced overall system robustness and autonomous decision-making.", } ,
                { type: "text", header: "My Contributions:", content: "I wrote ROS and Python code to implement tracking and prediction models onto our cameras, firmware for the different sensors, and developed testing plans to model distinct conditions. To validate perception and prediction performance, I utilized NVIDIA Isaac Sim to create representative testing environments and compare algorithm behavior across a range of operating scenarios. These simulation studies enabled repeatable testing and helped characterize system performance before deployment on physical hardware." },
                
               
                { type: "image", path: "assets/images/AmazonRobo/SensorTradeoffs.png" },
                
            
            
            ],
                specs: {
                    "Role": "Sensing Contractor",
                    "Timeline": "Sep 2025 - May 2026",
                    "Major Tools": "SolidWorks & FEA",
                    "Deliverables": "2 Design Reviews",
                    "Deployment": "Fulfillment Cells"
                },
               
            },
            p2: { 
                title: "Berkshire Grey", 
                desc: "Internship", 
                image: "assets/images/BerkshireGreyLogo.png", 
                nda: true,
                subtitle: "Systems Integration & Mechatronics Testing Co-op",
                sections: [
                {type: "text", header: "Overview:", content: "As a Hardware Engineering Co-Op at Berkshire Grey from June - September 2025, I contributed to the mechanical design, analysis, testing, and safety development of Scoop, an autonomous trailer-unloading robot designed for warehouse logistics applications.",},
                {type: "text", header: "overview:", content: "My primary project focused on developing a new self-aligning carriage system introduced late in the product development cycle to address conveyor alignment issues observed during deployment. The mechanism was required to pivot and self-align with external conveyors while simultaneously supporting deployment of a conveyor ramp, maintaining structural rigidity, minimizing deflection, meeting operator safety requirements, and remaining cost-effective to manufacture. "},
                {type: "text", header: "Process:", content:"My engineering process began by creating and evaluating multiple carriage concepts using SolidWorks before moving to physical prototypes. I built large-scale mockups using 80/20 framing and machined custom components to validate kinematics, range of motion, interference conditions, and integration with existing conveyor systems. I brought prototypes to the assembly site, where I tested on existing conveyor systems, with results informing next design iterations."},
                {type: "grid-image", paths: ["assets/images/BerkshireGrey/BG_Interior.webp", "assets/images/BerkshireGrey/BG_Scoop.png"]},
                {type: "text", header: "Hardware Selection:", content: "I independently evaluated commercial hardware including linear actuators, rollers, and omnidirectional wheels by constructing modular test fixtures and performing application-specific testing. Following hardware selection, I redesigned the carriage architecture around a validated pivot geometry and utilized SolidWorks’ FEA to reduce weight, improve stiffness, and simplify the overall structure.",},
                {type: "text", header: "Safety:", content: "The final design package included CAD models, engineering analysis, component selection rationale, bill-of-materials documentation, and design recommendations, which I presented during a company-wide engineering design review." },
                {type: "text", header: "Additional Work:", content: "In addition to the carriage project, I collaborated with contractors and electrical engineers to develop dedicated test fixtures, support system integration, identify DFM/DFA improvements, implement safety protocols, and evaluate actuator solutions with commercial vendors. I also developed safety hardware including guarding and mechanical hard stops, redesigned components that exhibited assembly or reliability issues during integration testing, and contributed industrial design features that improved product presentation and operator safety. "},
                
                 
            
            
            ],
                specs: {
                    "Role": "Integration Intern",
                    "Timeline": "Fall Co-op",
                    "Core Tools": "SolidWorks & Python",
                    "Test Iterations": "50+ Run Cycles",
                    "System Type": "High-Speed Sorter"
                },
               
            },
            p3: { 
                title: "Off-road Race Car", 
                desc: "Baja SAE", 
                image: "assets/images/Olin Baja Logo.webp", 
                subtitle: "Suspension Kinematics & Chassis Fabrication for Olin Baja",
                sections: [
                {type: "text", header: "overview:", content: "Since joining Olin Baja as a freshman in 2022, I have contributed to the design, fabrication, and validation of multiple vehicle systems, including suspension, steering, braking, and driver controls. I helped develop the vehicle that returned Olin to Baja SAE competition in 2024 for the first time since 2019, and now serve as Lead Mechanical Engineer for the 2024–2026 design cycle."},
                {type: "image", path: "assets/images/Baja/BajaisBack.png"},
                {type: "text", header: "My contributions:", content: "Following competition, I led efforts to analyze vehicle performance and identify opportunities for improvement. Working closely with the suspension team, I directed a redesign of the front suspension geometry to improve handling, manufacturability, and driver confidence. Key changes included achieving near-zero scrub radius, reducing steering axis inclination from 11.5° to 7.5°, and redesigning suspension components to enable in-house CNC manufacturing while eliminating several fabrication bottlenecks."},
                {type: "grid-3", paths: ["assets/images/Baja/BajaBrakeCAD.png", "assets/images/Baja/BajaBrakes.png", "assets/images/Baja/BajaBrakeFAB.jpg"]},
                {type: "grid-image", paths: ["assets/images/Baja/BajaFullChassis.png", "assets/images/Baja/BajaFEA1.png"]},
                {type: "text", header: "Analysis:", content: "To support these decisions, I developed a MATLAB-based suspension analysis and optimization framework capable of evaluating steering and suspension behavior across the vehicle's operating range. The tool modeled suspension travel, steering motion, and wheel kinematics, allowing the team to compare design concepts and quantify tradeoffs before committing to fabrication. Results from the model informed final A-arm, steering rack, shock, and knuckle geometry decisions throughout the design cycle."},
                
                {type: "grid-3", paths: ["assets/images/Baja/BajaSuspensionDemo.png", "assets/images/Baja/BajaSuspensionMath.png", "assets/images/Baja/BajaSuspensionSim2.png"]},
                {type: "text", header: "Leadership:", content: "Additional vehicle improvements included redesigning the footbox and pedal assembly based on driver feedback from competition. By constructing and testing a full-scale PVC mockup prior to fabrication, the team was able to validate ergonomics across a wide range of drivers and improve overall comfort and accessibility."},
               
                
            ],
                specs: {
                    "Position": "Suspension Lead",
                    "Track Clearance": "11 Inches",
                    "Primary Materials": "4130 Chromoly",
                    "Linkage Config": "Double Wishbone",
                    "Endurance Time": "4 Hours"
                },
               
            },
            p4: { 
                title: "Formula Electric", 
                desc: "Founded Aero Subteam", 
                image: "assets/images/Olin Formula Logo.png", 
                subtitle: "High-Voltage Packaging & Drivetrain Design for Olin Formula Electric",
                sections: [
                {type: "text", header: "Overview:", content: "As a founding member of Olin Electric Motorsports' first aerodynamics team, I helped establish the team's aerodynamic development process while designing, analyzing, and fabricating performance-focused components for a Formula-style electric race car. The team's goal was to increase vehicle downforce while maintaining manufacturability and exploring sustainable composite materials."},
                {type: "text", header: "Skills:", content: "I used CFD simulations in ANSYS Fluent to evaluate front-wing and rear-diffuser concepts, analyze airflow behavior, and verify aerodynamic performance before fabrication. These simulations helped guide design decisions and provided confidence that proposed geometries would generate meaningful aerodynamic effects on the vehicle."},
                {type: "grid-image", paths: [
                    "assets/images/Formula/FormulaCFD.avif",
                    "assets/images/Formula/FormulaCAD.png"
                ]},
                {type: "text", header: "My contributions:", content: "I used CFD simulations in ANSYS Fluent to evaluate front-wing and rear-diffuser concepts, analyze airflow behavior, and verify aerodynamic performance before fabrication. These simulations helped guide design decisions and provided confidence that proposed geometries would generate meaningful aerodynamic effects on the vehicle."},
                {type: "image", path: "assets/images/Formula/FabWork.png"},
                {type: "text", header: "Challenges:", content: "A key challenge was translating simulation-driven designs into physical hardware while maintaining geometric accuracy and producing a durable composite structure. Through multiple fabrication iterations, the team refined manufacturing methods and successfully produced functional aerodynamic prototypes for future testing and vehicle integration."},
                
                {type: "image", path: "assets/images/Formula/FinalProductFormula.jpg"}
            
            
            ],
                specs: {
                    "Subteam": "Drivetrain Lead",
                    "Accumulator Volt": "300V DC Max",
                    "Gearbox Design": "Bespoke Spur Gear",
                    "Safety Factor": "2.5 (Structural)",
                    "Max Motor RPM": "8000 RPM"
                },
                
            },
            p5: { 
                title: "Vertical Axis Wind Turbine", 
                desc: "Sustainability", 
                image: "assets/images/VAWT_Icon.webp", 
                subtitle: "Aerodynamic Design & Structural Analysis of a Residential VAWT",
                sections: [
                    {type: "text", header: "Overview:", content: "Designed and built a small-scale electricity-generating vertical axis wind turbine as part of a four-person mechanical engineering team. The project aimed to develop a complete renewable energy system from first principles, combining aerodynamic design, drivetrain development, manufacturing, and experimental validation.",},
                    {type: "image", path: "assets/images/VAWT_assets/VAWT Completed Design.png"},
                    {type: "text", header: "My Contributions:", content: "My primary contributions focused on airfoil development, gearbox design, and manufacturing leadership. To maximize turbine performance, I researched vertical axis wind turbine airfoil geometries and developed multiple candidate blade profiles with varying camber and thickness distributions. These concepts were evaluated through scaled prototyping and wind tunnel testing, allowing the team to compare aerodynamic performance before committing to a final design. To support design decisions, I performed aerodynamic analysis using COMSOL, QBlade, and XFLR to evaluate lift, drag, angle of attack, and predicted operating speeds. Simulation results were used to identify an optimal blade angle of attack and informed gearbox requirements, ensuring compatibility with the generator's required operating range of 1200–1800 RPM. In parallel, I designed the turbine drivetrain and gearbox in SolidWorks, applying Lewis bending analysis to evaluate gear tooth stresses and guide material selection. To balance performance and cost, gearbox components were manufactured using additive manufacturing techniques and integrated into the final system.",},
                    {type: "image", path: "assets/images/VAWT_assets/VAWT Struct Picture.png"},
                    {type: "grid-3", paths: ["assets/images/VAWT_assets/VAWT Airfoil Picture.png", "assets/images/VAWT_assets/VAWT Airfoils Design.png", "assets/images/VAWT_assets/VAWT CFD.png"]},
                    {type: "text", header: "Fabrication:", content: "Beyond subsystem design, I led fabrication and assembly of the complete turbine. Using Design for Manufacturing principles, I developed fabrication methods for the airfoils, drivetrain, and supporting structures while coordinating manufacturing activities and project timelines with the team's project manager. Airfoils were manufactured using laser-cut templates, hot-wire-cut foam cores, and lightweight structural reinforcement before being finished with Monokote covering to improve surface quality and aerodynamic performance." },
                    {type: "text", header: "Results:", content: "The completed turbine successfully generated electrical power and achieved a measured rotational speed of 1050 RPM compared to a CFD-predicted operating speed of 1200 RPM. This result validated the overall aerodynamic design approach and demonstrated strong agreement between simulation and real-world performance."},
                    
                
                
                ],
                    specs: {
                    "Blade Profile": "NACA 0015 Series",
                    "Rotor Diameter": "0.65 Meters",
                    "Core Materials": "Carbon Fiber & Foam",
                    "Startup Speed": "3.2 m/s",
                    "Max Power Coeff": "0.28 Cp"
                },
               
            },
            p6: { 
                title: "Hydroponic Cart", 
                desc: "Prototyping", 
                image: "assets/images/PIE_assets/PIE_droponics Hero page.png", 
                subtitle: "Automated Vertical Hydroponics Cultivation System",
                sections: [
                {type: "text", header: "overview:", content: "Worked with a multidisciplinary team of five engineers to design and build a portable autonomous hydroponic platform funded through the Weissman Foundry Grant. The system monitored environmental conditions and automatically regulated irrigation, nutrient delivery, and lighting using sensor feedback.",},
                {type: "text", header: "My Contributions:", content: "I designed mechanical enclosures and structural components in SolidWorks, analyzed water flow and irrigation performance using MATLAB, selected waterproof materials, and supported system integration and testing. Components were fabricated using 3D printing and vinyl-cutting processes, with designs iterated to balance waterproofing, manufacturability, and structural stability.",},
                {type: "grid-3", paths: [
                    "assets/images/PIE_assets/PIE_droponics Circuit Board.png",
                    "assets/images/PIE_assets/PIE_droponics Piping.png",
                    "assets/images/PIE_assets/PIE_droponics Top Board.png"
                ]},
                {type: "text", header: "Challenges:", content: "A primary engineering challenge was protecting electronics and sensors from water exposure while maintaining accessibility and long-term durability. Material and enclosure designs were evaluated based on cost, availability, environmental compatibility, and ease of fabrication, resulting in the use of PVC and vinyl gutter systems for the water delivery architecture.",},
                {type: "text", header: "Results:", content: "The final system successfully completed a one-month autonomous test run and was selected for continued development through additional Weissman Foundry funding."},
                
                {type: "image", path: "assets/images/PIE_assets/PIE_dro Final.png"},
                
            
            
            ],
                    specs: {
                    "Controller": "ESP32 Board",
                    "Plumbing Loops": "Drip Manifold",
                    "Main Sensors": "pH, TDS, Level",
                    "Lighting Cycle": "16h LED Array",
                    "Power Draw": "45W Average"
                },
                
            },
            p7: { 
                title: "Robotic Picker", 
                desc: "Mechatronics", 
                image: "assets/images/Mech Camden/Camden_gif.gif", 
                subtitle: "5-DOF Robotic Arm with Integrated Vacuum End-Effector",
                sections: [
                {type: "text", header: "overview:", content: "Developed a robotic sorting system capable of detecting colored objects, determining their physical location, and autonomously manipulating them using a 5-DOF robotic arm. Working alongside two other engineers, I led development of the robot kinematics and manipulation pipeline while contributing to computer vision and system integration architecture.",},
               
                {type: "text", header: "Project:", content: "A primary challenge of the project was bridging perception and manipulation. To accomplish this, I developed the coordinate transformation pipeline that converted fisheye camera detections into real-world robot coordinates. Using camera calibration, image undistortion, and ARUCO marker localization, the system transformed detected block positions through multiple reference frames before mapping them into the robot's workspace.",},
                {type: "grid-image", paths: [
                    "assets/images/Mech Camden/board detect snippet.png",
                    "assets/images/Mech Camden/Checker board.png"
                ]},
                {type: "text", header: "My Contributions:", content: "I developed and validated custom forward and inverse kinematics algorithms that enabled the arm to accurately position its end effector for grasping and placement tasks. These algorithms were integrated with trajectory generation routines to produce smooth, repeatable motion between pickup and drop-off locations. Forward kinematics models were used throughout development to verify manipulator behavior and validate inverse kinematic solutions.",},
                 {type: "grid-3", paths: [
                        "assets/images/Mech Camden/aruco board.png",
                        "assets/images/Mech Camden/aruco board +1.png",
                        "assets/images/Mech Camden/aruco board +2.png"
                        
                    ]},
                {type: "text", header: "Challenges:", content: "One of the most significant engineering challenges was compensating for hardware inaccuracies within the robotic platform. Joint position errors of up to 4–5 degrees created substantial uncertainty in end-effector placement, making reliable grasping difficult. Through calibration, testing, and correction strategies, I improved positioning consistency and helped achieve robust manipulation performance despite limitations in the underlying hardware." },
                 {type: "image", path: "assets/images/Mech Camden/dh table.png"},
                {type: "text", header: "Results:", content: "The completed system successfully integrated perception, calibration, kinematics, and robotic manipulation into a fully autonomous workflow. Mechanical CAMden achieved approximately 98% object detection accuracy and successfully sorted 85% of all test cases, demonstrating reliable end-to-end operation from object detection through physical grasping and placement."},
                   
                   
                    {type: "image", path: "assets/images/Mech Camden/Camden_gif2.gif"},
                   
                   
                    
            
            
            ],
                specs: {
                    "Degrees of Freedom": "5-DOF Joint Array",
                    "Max Payload": "1.2 Kilograms",
                    "End Effector": "Pneumatic Suction",
                    "Microcontroller": "Arduino Mega",
                    "Precision Rating": "+/- 1.5mm"
                },
                
            },
            p8: { 
                title: "Video Game Playing Robot", 
                desc: "Computer Vision", 
                image: "assets/images/Tetris Robot/tetris_king_gif.gif", 
                subtitle: "Autonomous Computer Vision Game Interaction Robot",
                sections: [
                {type: "text", header: "Overview:", content: "Developed a robotic Tetris-playing system capable of autonomously perceiving, planning, and physically interacting with a game controller using a webcam, robotic arm, and Raspberry Pi. Working within a team of five engineers, I led development of the computer vision pipeline and supported system integration and testing.",},
               {type: "image", path: "assets/images/Tetris Robot/Copy of Final Presentation Tetris KING.png"},
                {type: "text", header: "Design:", content: "Designed a perception system that identified the Tetris game board, detected occupied cells, recognized active game pieces, and converted visual information into a digital game state representation. The pipeline combined HSV masking, edge detection, and geometric feature extraction to improve robustness under varying lighting conditions. To increase reliability, piece detections were buffered across multiple frames and continuously synchronized with an internal game simulator.",},
                 {type: "image", path: "assets/images/Tetris Robot/Copy of Final Presentation Tetris KING (1).png"},
                {type: "image", path: "assets/images/Tetris Robot/Copy of Final Presentation Tetris KING (2).png"},
                {type: "image", path: "assets/images/Tetris Robot/Copy of Final Presentation Tetris KING (3).png"},
                {type: "text", header: "Challenge:", content: "A primary challenge was balancing detection accuracy with computational speed to enable real-time robotic decision making. The perception system was optimized to maintain low latency while accurately tracking game state and correcting simulator drift when discrepancies occurred."},
                {type: "grid-3", paths: [
                    "assets/images/Tetris Robot/Copy of Final Presentation Tetris KING (4).png",
                    "assets/images/Tetris Robot/Copy of Final Presentation Tetris KING (5).png",
                    "assets/images/Tetris Robot/Copy of Final Presentation Tetris KING (6).png"
                ]
            },
                {type: "text", header: "Results:", content: "The final system successfully detected the game board, cleared lines autonomously, and sustained gameplay for up to four minutes at a time while coordinating perception, planning, networking, and robotic actuation in real time."},
                
                {type: "video", path: "https://www.youtube.com/watch?v=sDlx_0leq-A"}
            ],
                    specs: {
                    "Language": "Python & OpenCV",
                    "Image Feed": "1080p Web Camera",
                    "Tracking Delay": "22 Milliseconds",
                    "Actuator Type": "Coreless Micro Servo",
                    "Success Margin": "94% Tracking"
                },
                
            },
            p9: { 
                title: "Injection Molded Beyblade", 
                desc: "Manufacturing", 
                image: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide1.png", 
                subtitle: "DFMA Optimization & CNC Mold Machining of a Toy Spinner",
                sections: [
                    
                    { type: "image", path: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide2.png" 
                    },
                    { type: "image", path: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide3.png"
                    },
                    { type: "image", path: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide4.png"
                    },
                    { type: "image", path: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide5.png"
                    },
                    { type: "image", path: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide6.png"
                    },
                    { type: "image", path: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide7.png"
                    },
                    { type: "image", path: "assets/images/DFM/Beyblade_Mold_Presentation_v3/Slide8.png"
                    }
                    

                ],
                specs: {
                    "Mold Material": "6061-T6 Aluminum",
                    "Plastic Resin": "Polypropylene (PP)",
                    "Part Draft Angle": "1.5 Degrees Min",
                    "Cycle Injection Time": "14 Seconds",
                    "Spin Velocity": "4200 RPM Max"
                },
               
            }
        };
