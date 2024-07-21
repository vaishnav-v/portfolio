const SKILLS =
    [
        [
            'Angular', 'RxJs', 'TypeScrpt', 'Nx', 'NgRx', 'Tailwind', 'Bootstrap', 'Responsive Design',
            'Angular Material', 'PrimeNG'
        ],
        [
            'React', 'React router', 'React hooks',
        ],
        [
            'Node', 'ExpessJs', 'MongoDB'
        ],
        [
            'Git', 'Docker', 'Jira', 'Sass', 'Webpack'
        ]
    ]

window.addEventListener('DOMContentLoaded', onInit)

function onInit() {
    console.log("Welcome");
    addFrontEndSkills()
}

function addFrontEndSkills() {
    const holder = document.getElementById('skill-list')
    SKILLS.forEach(skillSet => {
        const ul = document.createElement('ul')
        skillSet.forEach(skill => addSkill(skill, ul))
        holder.appendChild(ul)
    })
}


function addSkill(skillName, element) {
    const skillNode = document.createElement('li')
    skillNode.classList.toggle('skill')
    skillNode.innerText = skillName
    return element.appendChild(skillNode)
}