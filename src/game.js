var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('play', {
    preload: function() {
        game.load.image('skeleton', 'assets/allacrost_enemy_sprites/skeleton.png');
    },


});
