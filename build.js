({
    baseUrl: 'src',
    include: [
        'lang',
        '../webfont',
        'animationHandler',
        'states/Preload',
        'states/Menu',
        'states/Login',
        'states/Logout',
        'states/Game',
        'states/GameOver',
        'states/Language',
        'entites/Caracter',
        'entites/Ennemy',
        'entites/Map',
        'entites/Tower',
        'main',
        'socketHandler',
        'login-box'
    ],
    wrap: true,
    out: './dist/dist.js'
})