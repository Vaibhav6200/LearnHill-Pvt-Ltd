function display1(){
    document.getElementById("program_block_1").style.display = 'block'
    document.getElementById("program_block_2").style.display = 'none'
    document.getElementById("program_block_3").style.display = 'none'

    document.getElementById("service_header_1").classList.add('shadow')
    document.getElementById("service_header_2").classList.remove('shadow')
    document.getElementById("service_header_3").classList.remove('shadow')
    centuryCard1();
}

function display2(){
    document.getElementById("program_block_1").style.display = 'none'
    document.getElementById("program_block_2").style.display = 'block'
    document.getElementById("program_block_3").style.display = 'none'

    document.getElementById("service_header_1").classList.remove('shadow')
    document.getElementById("service_header_2").classList.add('shadow')
    document.getElementById("service_header_3").classList.remove('shadow')

    stemCard1();
}

function display3(){
    document.getElementById("program_block_1").style.display = 'none'
    document.getElementById("program_block_2").style.display = 'none'
    document.getElementById("program_block_3").style.display = 'block'

    document.getElementById("service_header_1").classList.remove('shadow')
    document.getElementById("service_header_2").classList.remove('shadow')
    document.getElementById("service_header_3").classList.add('shadow')

    skillCard1();
}

window.onload = display1()




function centuryCard1(){
    document.getElementById('service_card_heading').innerHTML = "A space for hands-on exploration and innovation, encouraging creativity and problem-solving.";
    document.getElementById('execution_point_1').innerHTML = "Delivery of Customized Kits";
    document.getElementById('execution_point_2').innerHTML = "Set-up of Labs";
    document.getElementById('execution_point_3').innerHTML = "Teacher Training Program";
    document.getElementById('execution_point_4').innerHTML = "Student Training Program";
    document.getElementById('execution_point_5').innerHTML = "Year-long Handholding ";
    document.getElementById('execution_point_6').innerHTML = "COMPETITIONS, QUIZZES, PRESENTATIONS, SEMINARS, STATE-LEVEL EXHIBITIONS";

    html = `<img class="project_image_1" src="/static/img/services/century/TL_Lab/Image1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/century/TL_Lab/Image2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/century/TL_Lab/Image3.jpg" alt="">`

    document.getElementById('program_image_set_1').innerHTML = html
}

function centuryCard2(){
    document.getElementById('service_card_heading').innerHTML = "Develops students' skills in machine learning and data analysis, enabling them to understand and work with AI technologies.";
    document.getElementById('execution_point_1').innerHTML = "Delivery of Customized Kits";
    document.getElementById('execution_point_2').innerHTML = "Set-up of Labs";
    document.getElementById('execution_point_3').innerHTML = "Teacher Training Program";
    document.getElementById('execution_point_4').innerHTML = "Student Training Program";
    document.getElementById('execution_point_5').innerHTML = "Year-long Handholding ";
    document.getElementById('execution_point_6').innerHTML = "COMPETITIONS, QUIZZES, PRESENTATIONS, SEMINARS, STATE-LEVEL EXHIBITIONS";


    html = `<img class="project_image_1" src="/static/img/services/century/AI_Lab/Image1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/century/AI_Lab/Image2.jpeg" alt="">
    <img class="project_image_3" src="/static/img/services/century/AI_Lab/Image3.jpg" alt="">`

    document.getElementById('program_image_set_1').innerHTML = html
}

function centuryCard3(){
    document.getElementById('service_card_heading').innerHTML = "Engages students in interdisciplinary learning, emphasizing science, technology, engineering, and mathematics through practical projects.";
    document.getElementById('execution_point_1').innerHTML = "Delivery of Customized Kits";
    document.getElementById('execution_point_2').innerHTML = "Set-up of Labs";
    document.getElementById('execution_point_3').innerHTML = "Teacher Training Program";
    document.getElementById('execution_point_4').innerHTML = "Student Training Program";
    document.getElementById('execution_point_5').innerHTML = "Year-long Handholding ";
    document.getElementById('execution_point_6').innerHTML = "COMPETITIONS, QUIZZES, PRESENTATIONS, SEMINARS, STATE-LEVEL EXHIBITIONS";


    html = `<img class="project_image_1" src="/static/img/services/century/stem_activities/stem_image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/century/stem_activities/stem_image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/century/stem_activities/stem_image_3.jpeg" alt="">`

    document.getElementById('program_image_set_1').innerHTML = html
}

function centuryCard4(){
    document.getElementById('service_card_heading').innerHTML = "Teaches students to create virtual models and transform them into physical objects with 3D printers.";
    document.getElementById('execution_point_1').innerHTML = "Delivery of Materials";
    document.getElementById('execution_point_2').innerHTML = "Set-up of Labs";
    document.getElementById('execution_point_3').innerHTML = "Teacher Training Program";
    document.getElementById('execution_point_4').innerHTML = "Student Training Program";
    document.getElementById('execution_point_5').innerHTML = "Year-long Handholding ";
    document.getElementById('execution_point_6').innerHTML = "HACKATHON, PROTOTYPING, COMPETITIONS";


    html = `<img class="project_image_1" src="/static/img/services/century/design_and_printing/Image1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/century/design_and_printing/Image2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/century/design_and_printing/Image3.jpg" alt="">`

    document.getElementById('program_image_set_1').innerHTML = html

}

function centuryCard5(){
    document.getElementById('service_card_heading').innerHTML = "Focuses on electronics, circuitry, and programming, empowering students to build and program their own devices.";
    document.getElementById('execution_point_1').innerHTML = "Delivery of Customized Kits";
    document.getElementById('execution_point_2').innerHTML = "Set-up of Labs";
    document.getElementById('execution_point_3').innerHTML = "Teacher Training Program";
    document.getElementById('execution_point_4').innerHTML = "Student Training Program";
    document.getElementById('execution_point_5').innerHTML = "Year-long Handholding ";
    document.getElementById('execution_point_6').innerHTML = "HACKATHON, QUIZZES, PRESENTATIONS, SEMINARS, STATE-LEVEL EXHIBITIONS";


    html = `<img class="project_image_1" src="/static/img/services/century/electronics_and_coding/Image1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/century/electronics_and_coding/Image2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/century/electronics_and_coding/Image3.jpg" alt="">`

    document.getElementById('program_image_set_1').innerHTML = html
}




function stemCard1(){
    document.getElementById('stem_service_card_heading').innerHTML = "These clubs provide a platform for students to explore science and mathematics through hands-on experiments, demonstrations, discussions, and problem-solving activities.";
    document.getElementById('stem_execution_point_2').innerHTML = "Delivery of Customized Kits";
    document.getElementById('stem_execution_point_3').innerHTML = "Set-up of Labs";
    document.getElementById('stem_execution_point_4').innerHTML = "Student Training Program";
    document.getElementById('stem_execution_point_5').innerHTML = "Year-long Handholding";
    document.getElementById('stem_execution_point_6').innerHTML = "COMPETITIONS, QUIZZES, PRESENTATIONS, SEMINARS, STATE-LEVEL EXHIBITIONS";


    html = `<img class="project_image_1" src="/static/img/services/stem/science_club/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/stem/science_club/image_2.jpeg" alt="">
    <img class="project_image_3" src="/static/img/services/stem/science_club/image_3.jpeg" alt="">`

    document.getElementById('program_image_set_2').innerHTML = html
}

function stemCard2(){
    document.getElementById('stem_service_card_heading').innerHTML = "Science congress events bring together students to present their research projects, scientific discoveries, and innovative ideas in a competitive or collaborative environment, fostering scientific inquiry and communication skills.";
    document.getElementById('stem_execution_point_1').innerHTML = "";
    document.getElementById('stem_execution_point_2').innerHTML = "School Mentoring";
    document.getElementById('stem_execution_point_3').innerHTML = "Project Development";
    document.getElementById('stem_execution_point_4').innerHTML = "Workshop";
    document.getElementById('stem_execution_point_5').innerHTML = "Showcase ";
    document.getElementById('stem_execution_point_6').innerHTML = "COMPETITIONS, QUIZZES, PRESENTATIONS, SEMINARS, STATE-LEVEL EXHIBITIONS";


    html = `<img class="project_image_1" src="/static/img/services/stem/science_congress/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/stem/science_congress/image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/stem/science_congress/image_3.jpg" alt="">`

    document.getElementById('program_image_set_2').innerHTML = html
}

function stemCard3(){
    document.getElementById('stem_service_card_heading').innerHTML = "STEM kits are hands-on learning resources that contain materials, tools, and instructions for students to conduct STEM experiments or projects at home or in the classroom. They promote exploration, problem-solving, and critical thinking skills.";
    document.getElementById('stem_execution_point_1').innerHTML = "Delivery of Customized Kits";
    document.getElementById('stem_execution_point_2').innerHTML = "Set-up of Labs";
    document.getElementById('stem_execution_point_3').innerHTML = "Teacher Training Program";
    document.getElementById('stem_execution_point_4').innerHTML = "Student Training Program";
    document.getElementById('stem_execution_point_5').innerHTML = "Year-long Handholding ";
    document.getElementById('stem_execution_point_6').innerHTML = "COMPETITIONS, QUIZZES, PRESENTATIONS, SEMINARS, STATE-LEVEL EXHIBITIONS";


    html = `<img class="project_image_1" src="/static/img/services/stem/stem_kits/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/stem/stem_kits/image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/stem/stem_kits/image_3.jpeg" alt="">`

    document.getElementById('program_image_set_2').innerHTML = html
}

function stemCard4(){
    document.getElementById('stem_service_card_heading').innerHTML = "State or national-level quizzes in science, mathematics, or general knowledge test students' knowledge, problem-solving abilities, and critical thinking skills in a competitive setting.";
    document.getElementById('stem_execution_point_1').innerHTML = "";
    document.getElementById('stem_execution_point_2').innerHTML = "School mentoring";
    document.getElementById('stem_execution_point_3').innerHTML = "Mock Practice Sessions";
    document.getElementById('stem_execution_point_4').innerHTML = "Qualifying Rounds";
    document.getElementById('stem_execution_point_5').innerHTML = "Final Showdown";
    document.getElementById('stem_execution_point_6').innerHTML = "DISTRICT LEVEL, STATE LEVEL, NATIONAL LEVEL, SEMINARS";


    html = `<img class="project_image_1" src="/static/img/services/stem/quiz/image_1.jpeg" alt="">
    <img class="project_image_2" src="/static/img/services/stem/quiz/image_2.jpeg" alt="">
    <img class="project_image_3" src="/static/img/services/stem/quiz/image_3.jpeg" alt="">`

    document.getElementById('program_image_set_2').innerHTML = html
}

function stemCard5(){
    document.getElementById('stem_service_card_heading').innerHTML = "Olympiads are competitive exams conducted at the state or national level to identify and recognize students' excellence in STEM subjects. They encourage students to deepen their understanding, apply concepts, and solve challenging problems.";
    document.getElementById('stem_execution_point_1').innerHTML = "";
    document.getElementById('stem_execution_point_2').innerHTML = "School Mentoring";
    document.getElementById('stem_execution_point_3').innerHTML = "Mock Practice Sessions";
    document.getElementById('stem_execution_point_4').innerHTML = "Qualifying Rounds";
    document.getElementById('stem_execution_point_5').innerHTML = "Final Showdown";
    document.getElementById('stem_execution_point_6').innerHTML = "DISTRICT LEVEL, STATE LEVEL, NATIONAL LEVEL, SEMINARS";


    html = `<img class="project_image_1" src="/static/img/services/stem/olympiads/image_1.jpeg" alt="">
    <img class="project_image_2" src="/static/img/services/stem/olympiads/image_2.jpeg" alt="">
    <img class="project_image_3" src="/static/img/services/stem/olympiads/image_3.jpeg" alt="">`

    document.getElementById('program_image_set_2').innerHTML = html
}






function skillCard1(){
    document.getElementById('skill_service_card_heading').innerHTML = "This training equips individuals with the essential skills needed to succeed in today's world, such as critical thinking, problem-solving, communication, collaboration, creativity, and digital literacy.";
    document.getElementById('skill_execution_point_1').innerHTML = "Training with Customized Kits";
    document.getElementById('skill_execution_point_2').innerHTML = "Lab Setup Exposure";
    document.getElementById('skill_execution_point_3').innerHTML = "Hands-on Activities";
    document.getElementById('skill_execution_point_4').innerHTML = "Placement Opportunity";
    document.getElementById('skill_execution_point_5').innerHTML = "Soft Skills Training ";
    document.getElementById('skill_execution_point_6').innerHTML = "SPOKEN ENGLISH, PRESENTATION, COMMUNICATION, EMPLOYABILITY SKILLS";
    document.getElementById('skill_execution_container').style.display = 'block';


    html = `<img class="project_image_1" src="/static/img/services/skill/century/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/skill/century/image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/skill/century/image_3.jpg" alt="">`

    document.getElementById('program_image_set_3').innerHTML = html
}

function skillCard2(){
    document.getElementById('skill_service_card_heading').innerHTML = "Programs that provide training in coding, robotics, artificial intelligence (AI), and automation enable individuals to develop technical skills in these emerging fields. They learn programming languages, explore robotics and automation concepts, and gain an understanding of AI technologies.";
    document.getElementById('skill_execution_container').style.display = 'block';
    document.getElementById('skill_execution_point_1').innerHTML = "Training with Customized Kits";
    document.getElementById('skill_execution_point_2').innerHTML = "Lab Setup Exposure";
    document.getElementById('skill_execution_point_3').innerHTML = "Hands-on Activities";
    document.getElementById('skill_execution_point_4').innerHTML = "Placement Opportunity";
    document.getElementById('skill_execution_point_5').innerHTML = "Soft Skills Training ";
    document.getElementById('skill_execution_point_6').innerHTML = "SPOKEN ENGLISH, PRESENTATION, COMMUNICATION, EMPLOYABILITY SKILLS";

    html = `<img class="project_image_1" src="/static/img/services/skill/robotics/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/skill/robotics/image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/skill/robotics/image_3.jpg" alt="">`

    document.getElementById('program_image_set_3').innerHTML = html
}

function skillCard3(){
    document.getElementById('skill_service_card_heading').innerHTML = "Developing an entrepreneurial mindset involves cultivating traits like creativity, innovation, risk-taking, and adaptability. Skill development programs may include activities that foster entrepreneurial thinking, idea generation, business planning, and the fundamentals of starting and managing a business.";
    document.getElementById('skill_execution_container').style.display = 'none';


    html = `<img class="project_image_1" src="/static/img/services/skill/entrepreneurial_mindset/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/skill/entrepreneurial_mindset/image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/skill/entrepreneurial_mindset/image_3.jpg" alt="">`

    document.getElementById('program_image_set_3').innerHTML = html
}

function skillCard4(){
    document.getElementById('skill_service_card_heading').innerHTML = "These programs focus on improving individuals' employability skills, including resume writing, interview preparation, effective communication, time management, teamwork, and professional etiquette. The aim is to prepare individuals for the job market and help them succeed in their chosen careers.";
    document.getElementById('skill_execution_container').style.display = 'none';

    html = `<img class="project_image_1" src="/static/img/services/skill/skills_training/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/skill/skills_training/image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/skill/skills_training/image_3.jpg" alt="">`

    document.getElementById('program_image_set_3').innerHTML = html
}

function skillCard5(){
    document.getElementById('skill_service_card_heading').innerHTML = "Skill development programs often include job placement services or collaborations with employers to facilitate the transition of individuals into the workforce. This can involve job search assistance, career counseling, networking opportunities, and internships or apprenticeships to gain practical experience.";
    document.getElementById('skill_execution_container').style.display = 'none';

    html = `<img class="project_image_1" src="/static/img/services/skill/placements/image_1.jpg" alt="">
    <img class="project_image_2" src="/static/img/services/skill/placements/image_2.jpg" alt="">
    <img class="project_image_3" src="/static/img/services/skill/placements/image_3.jpg" alt="">`

    document.getElementById('program_image_set_3').innerHTML = html
}


function showImageSet1(){
    document.getElementById('img_set_1').style.display = 'block';
    document.getElementById('img_set_2').style.display = 'none';
    document.getElementById('img_set_3').style.display = 'none';
    document.getElementById('img_set_4').style.display = 'none';
    document.getElementById('img_set_5').style.display = 'none';
}

function showImageSet2(){
    document.getElementById('img_set_1').style.display = 'none';
    document.getElementById('img_set_2').style.display = 'block';
    document.getElementById('img_set_3').style.display = 'none';
    document.getElementById('img_set_4').style.display = 'none';
    document.getElementById('img_set_5').style.display = 'none';
}