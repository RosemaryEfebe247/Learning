let game = [
    {id: '1', title: 'Tears of the kingdom', platform: ['Switch']},
    {id: '2', title: 'Final Fantasy', platform: ['PS5', 'Xbox']}
]

 let author = [
    {id: '1', name: 'Mario', verified: true},
    {id: '3', name: 'Yosh', verified: false},
    {id : '4', name: 'peach', verified: true}
]

let review = [
    {id: '1', rating: 9, content: 'Very good', game_id: '1', author_id: '1'},
    {id: '9', rating: 3, content: 'Poor, please review', game_id: '3', author_id: '1'}
]

export default { game, author, review }

