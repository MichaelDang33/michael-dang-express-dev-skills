const Skill = require("../models/skill")

function index (request, response) {
    const skills = Skill.getAll();
    response.render("skills/index", {
        skills,
        title: "All Dev Skills"
    });
}

function show (request, response) {
    response.render("skills/show", {
        skills: Skill.getOne(request.params.id),
    });
}

function newSkill (request, response) {
    response.render("skills/new", {title: "New Skill"})
}

function create (request, response) {
    Skill.create(request.body);
    response.redirect("/skills");
}

function deleteSkill (request, response) {
    Skill.delete(request.params.id);
    response.redirect("/skills");
}

function edit (request, response) {
    response.render("skills/edit", {
        skills: Skill.getOne(request.params.id),
        title: "Edit Skill"
    });
}

function update (request, response) {
    request.body.done = !!request.body.done
    Skill.update(request.params.id, request.body)
    response.redirect(`/skills/${request.params.id}`)
}

module.exports = {
    index,
    show,
    newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}