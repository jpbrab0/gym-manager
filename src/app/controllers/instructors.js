const { age, date } = require("../../lib/utils");
const db = require("../../config/db");
module.exports = {
  index(req,res){
    db.query(`SELECT * FROM instructors`, (err, results) => {
      if(err) return res.send("Database error!")
      return res.render("instructors/index", { instructors: results.rows });
    })
  },
  create(req,res){
    return res.render("instructors/create")
  },
  post(req,res){
    const keys = Object.keys(req.body)
    for(key of keys){
      if(req.body[key] == ''){
        return res.send("Por favor preencha todos os dados corretamente.")
      }
    }
    const query = `
      INSERT INTO instructors (
        name,
        avatar_url,
        gender,
        services,
        birth,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `
    const values = [
      req.body.name,
      req.body.avatar_url,
      req.body.gender,
      req.body.services,
      date(req.body.birth).iso,
      date(Date.now()).iso,
    ]

    db.query(query, values, (err, results) => {
      if(err) return res.send("Database error!")
      return
    })
    return res.redirect("/")
  },
  show(req,res){
    return
  },
  edit(req,res){
    return
  },
  put(req,res){
    return
  },
  delete(req,res){
    return
  },
}
