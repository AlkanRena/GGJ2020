let config = {
    name: 'engine-block-component',
    nameId: '#EngineBlockComponent',
    nameCopy: 'copy-engine-block-component',
    nameCopyId: '#EngineBlockComponentToCopy',
    properColor: '#999',
    hoverColor: 'lightblue',
    transparentColor: '#EF2D5E',
    material: 'side: double; transparent: false; opacity: 1'
}

AFRAME.registerComponent(config.name, {
    init: function () {
        var el = this.el;  // <a-box>

        el.addEventListener('click', function () {
            if(document.querySelector(config.nameId) == null){return;}

            let color = document.querySelector('.engine-block-component-dark').getAttribute('color');
            let scoreText = document.querySelector('#score');
            let notThisBlock = document.querySelector('#notThisBlock');
            let notThisBlockAbox = document.querySelector('#notThisBlockAbox');

            notThisBlock.setAttribute('value', 'No Error');
            notThisBlock.removeAttribute('animation__2');
            notThisBlock.removeAttribute('animation__3');
            notThisBlock.removeAttribute('animation__4');
            notThisBlockAbox.removeAttribute('animation__1');

            if (document.querySelector(config.nameId).getAttribute('visible') === true) {
                document.querySelector(config.nameId).remove();
                if (color !== config.properColor) {
                    score++
                    scoreText.setAttribute('value', score.toString());
                    // el.setAttribute('color', config.properColor);
                    // el.setAttribute('material', config.material);

                    let greycylinder = document.querySelectorAll('.engine-block-component-blue');
                    document.querySelector('.engine-block-component-dark').removeAttribute('material');
                    document.querySelector('.engine-block-component-dark').setAttribute('material', 'flatShading: true;');
                        document.querySelector('.engine-block-component-dark').setAttribute('color', '#999');
                    console.log('test')
                    for (let i = 0; i < greycylinder.length; i++) {
                        console.log('test')
                        greycylinder[i].removeAttribute('material');
                        greycylinder[i].setAttribute('material', 'flatShading: true;');
                        greycylinder[i].setAttribute('color', '#0FF');

                      }
                }
            } else {
                notThisBlock.setAttribute('value', '#!#Error#!#');
                notThisBlock.setAttribute('animation__2', 'property: object3D.scale.x; to: 0.4; dir: alternate; dur: 500; loop: 4');
                notThisBlock.setAttribute('animation__3', 'property: object3D.scale.y; to: 0.4; dir: alternate; dur: 500; loop: 4');
                notThisBlock.setAttribute('animation__4', 'property: object3D.scale.z; to: 0.4; dir: alternate; dur: 500; loop: 4');
                notThisBlockAbox.setAttribute('animation__1', 'property: material.color; from: #FFF; to: #F00; dir: alternate; dur: 500; loop: 4');
            }

            start();

            if (score === 6) {
                console.log("win")
                end();
                console.log(seconds)
            }
        });
    }
});

AFRAME.registerComponent(config.nameCopy, {

    init: function () {

        var el = this.el;  // <a-box>


        el.addEventListener('click', function () {
            document.querySelector(config.nameId).setAttribute('visible', 'true');
            document.querySelector(config.nameCopyId).remove();
        });
    }
});