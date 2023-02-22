const express = require ('express')
const app = express()



app.use(
    
    
    express.urlencoded({
        extended: true,
        

        
    }),
)
app.post('/person', async (req,res)=>{
    const{name,idade, approved, email} = req.body

    const person= {
        name,
        idade,
        approved,
        email
    }
    try {
        await Person.create(person)
        res.status(201).json({message:'Pessoa inserida no sistema com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
        
    }
})
app.use(express.json())

app.get('/', (req, res) =>{

    //mostrar req
    res.json({message: 'Oi Express'})
}
)


throw new Error('An error occurred');

app.listen(5432)