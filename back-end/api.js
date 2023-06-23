const produtos_banco_de_dados = [{
    
      'id': '1',
      'nome': 'Batata',
      'img':
          'https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png',
      'valor': 10.42
    },
    {
      'id': '2',
      'nome': 'Pera',
      'img':
          'https://media.istockphoto.com/id/529401513/pt/foto/.jpg?s=612x612&w=0&k=20&c=DSUVrqR2bW1PFrUgtEDPoe4Yamkg6nS5W646RwWKVP8=',
      'valor': 4.59
    },
    {
      'id': '3',
      'nome': 'Uva',
      'img':
          'https://mercadoterra.s3.amazonaws.com/web/media/2020/04/uva-thompson.png',
      'valor': 12.10
    },
    {
      'id': '4',
      'nome': 'Maça',
      'img':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg',
      'valor': 9.45
    },
    {
      'id': '5',
      'nome': 'Fruta do Conde',
      'img':
          'https://static3.tcdn.com.br/img/img_prod/350075/muda_de_fruta_do_conde_com_60cm_feita_de_semente_5073_1_20220412114217.jpg',
      'valor': 46.33
    },
    {
      'id': '6',
      'nome': 'Amora',
      'img':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg/250px-Blackberries_%28Rubus_fruticosus%29.jpg',
      'valor': 12.83
    },
    {
      'id': '7  ',
      'nome': 'Kiwi',
      'img':
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/280px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg',
      'valor': 22.52
    }
  ]

  var express = require('express')
  var cors = require('cors')
  var app = express()
  const port = 3000
  app.use(cors())

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
  app.get('/login', (req, res) => {
    res.send('Login')
  })


  app.get('/produtos', (req, res) => {
    res.json(produtos_banco_de_dados)
  })
  
  app.listen(port,'0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
  })