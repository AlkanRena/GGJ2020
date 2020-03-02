let configSmallAntena = {
    name: 'small-antena-block-component',
    nameId: '#SmallAntenaBlockComponent',
    nameCopy: 'copy-small-antena-block-component',
    nameCopyId: '#SmallAntenaBlockComponentToCopy',
    properColor: 'red',
    hoverColor: 'lightblue',
    transparentColor: '#cccccc',
    material: 'side: double; transparent: false; opacity: 1'
}

AFRAME.registerComponent(configSmallAntena.name, {
    init: function () {
        var el = this.el;  // <a-box>
        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configSmallAntena.properColor) {
                el.setAttribute('color', configSmallAntena.hoverColor);
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configSmallAntena.properColor) {
                el.setAttribute('color', configSmallAntena.transparentColor);
            }
        })

        el.addEventListener('click', function () {
            if(document.querySelector(configSmallAntena.nameId) == null){return;}
            let color = el.getAttribute('color');
            let scoreText = document.querySelector('#score');
            let notThisBlock = document.querySelector('#notThisBlock');
            let notThisBlockAbox = document.querySelector('#notThisBlockAbox');

            notThisBlock.setAttribute('value', 'No Error');
            notThisBlock.removeAttribute('animation__2');
            notThisBlock.removeAttribute('animation__3');
            notThisBlock.removeAttribute('animation__4');
            notThisBlockAbox.removeAttribute('animation__1');

            if (document.querySelector(configSmallAntena.nameId).getAttribute('visible') === true) {
                document.querySelector(configSmallAntena.nameId).remove();
                if (color !== configSmallAntena.properColor) {
                    score++
                    scoreText.setAttribute('value', score.toString());
                    el.setAttribute('color', configSmallAntena.properColor);
                    el.setAttribute('material', configSmallAntena.material);
                    let greycylinder = document.querySelectorAll('.small-antena-block-component');
                    
                    for (let i = 0; i < greycylinder.length; i++) {
                        
                        greycylinder[i].setAttribute('material', configCylinder.material)
                        greycylinder[i].setAttribute('color', '#666666')
                        
    
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

AFRAME.registerComponent(configSmallAntena.nameCopy, {

    init: function () {

        var el = this.el;  // <a-box>

        el.addEventListener('click', function () {
            document.querySelector(configSmallAntena.nameId).setAttribute('visible', 'true');
            document.querySelector(configSmallAntena.nameCopyId).remove();
        });
    }
});