# Exercício-III

Criar interface com lista de personagens e suas respectivas formas, ao clicar numa forma, mostrar a imagem.

Sugestões de estrutura para usar:

*** Caso já saiba usar mapas: ***

```javascript
personagens = new Map([
    ['goku', [
      'https://www.einerd.com.br/wp-content/uploads/2017/02/goku-890x466.jpg',
      'https://s.aficionados.com.br/imagens/gokukaio-kenvsvegetanv_cke.jpg',
      'https://s.aficionados.com.br/imagens/dragon-ball-z-super-saiyan-goku_cke.jpg',
      'https://s.aficionados.com.br/imagens/funko-pop-dragon-ball-z-super-saiyan-3-goku-492-nuevo-d-nq-np-812883-mla29350084353-022019-f_cke.jpg',
    ]],
    ['vegeta', [
      'https://criticalhits.com.br/wp-content/uploads/2020/05/vegeta-base.jpg',
      'https://i1.sndcdn.com/artworks-y1WcOJwtzfhThB5i-kDG3rg-t500x500.jpg',
      'https://i.pinimg.com/originals/33/37/b0/3337b04a4873c6e2c49b3a1dd97fea93.jpg',
    ]],
]);
```

*** ou ***

```javascript
personagens = [
    { 
        nome: 'goku', 
        formas: [
            'https://www.einerd.com.br/wp-content/uploads/2017/02/goku-890x466.jpg',
            'https://s.aficionados.com.br/imagens/gokukaio-kenvsvegetanv_cke.jpg',
            'https://s.aficionados.com.br/imagens/dragon-ball-z-super-saiyan-goku_cke.jpg',
            'https://s.aficionados.com.br/imagens/funko-pop-dragon-ball-z-super-saiyan-3-goku-492-nuevo-d-nq-np-812883-mla29350084353-022019-f_cke.jpg',
        ]
    },
    {
        nome: 'vegeta',
        formas: [
            'https://criticalhits.com.br/wp-content/uploads/2020/05/vegeta-base.jpg',
            'https://i1.sndcdn.com/artworks-y1WcOJwtzfhThB5i-kDG3rg-t500x500.jpg',
            'https://i.pinimg.com/originals/33/37/b0/3337b04a4873c6e2c49b3a1dd97fea93.jpg',
        ]
    }
]
```

### How to run

```
npm i
npm start
```