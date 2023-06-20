const skills = [
    {id: 123456, skill: "HTML", done: true},
    {id: 234567, skill: "CSS", done: true},
    {id: 345678, skill: "JavaScript", done: false}
]

function getAll() {
    return skills;
}

function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const skillIdx = skills.findIndex(skill => skill.id === id);
    skills.splice(skillIdx, 1)
}

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne,
    update
}