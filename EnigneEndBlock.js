let configEngineEnd = {
    name: 'engine-end-block-component',
    nameId: '#EngineEndBlockComponent',
    nameCopy: 'copy-engine-end-block-component',
    nameCopyId: '#EngineEndBlockComponentToCopy',
    properColor: 'red',
    hoverColor: 'lightblue',
    transparentColor: '#EF2D5E',
    material: 'side: double; transparent: false; opacity: 1'
}

AFRAME.registerComponent(configEngineEnd.name, {
    init: function () {
        var el = this.el;  // <a-box>
        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configEngineEnd.properColor) {
                el.setAttribute('color', configEngineEnd.hoverColor);
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configEngineEnd.properColor) {
                el.setAttribute('color', configEngineEnd.transparentColor);
            }
        })

        el.addEventListener('click', function () {
            if(document.querySelector(configEngineEnd.nameId) == null){return;}

            let color = el.getAttribute('color');
            let scoreText = document.querySelector('#score');
            let notThisBlock = document.querySelector('#notThisBlock');
            let notThisBlockAbox = document.querySelector('#notThisBlockAbox');

            notThisBlock.setAttribute('value', 'No Error');
            notThisBlock.removeAttribute('animation__2');
            notThisBlock.removeAttribute('animation__3');
            notThisBlock.removeAttribute('animation__4');
            notThisBlockAbox.removeAttribute('animation__1');

            if (document.querySelector(configEngineEnd.nameId).getAttribute('visible') === true) {
                document.querySelector(configEngineEnd.nameId).remove();
                if (color !== configEngineEnd.properColor) {
                    score++
                    scoreText.setAttribute('value', score.toString());
                    el.setAttribute('color', configEngineEnd.properColor);
                    el.setAttribute('material', configEngineEnd.material);
                    
                    let greycylinder = document.querySelectorAll('.engine-end-block-component-grey');
                    document.querySelector('.engine-end-block-component').setAttribute('material', configCylinder.material);
                    document.querySelector('.engine-end-block-component').setAttribute('color', '#333');
                    for (let i = 0; i < greycylinder.length; i++) {
                        
                        greycylinder[i].setAttribute('material', configCylinder.material)
                        greycylinder[i].setAttribute('color', '#666')
                        
    
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

AFRAME.registerComponent(configEngineEnd.nameCopy, {

    init: function () {

        var el = this.el;  // <a-box>

        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configEngineEnd.properColor) {
                el.setAttribute('color', configEngineEnd.hoverColor);
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configEngineEnd.properColor) {
                el.setAttribute('color', configEngineEnd.transparentColor);
            }
        })

        el.addEventListener('click', function () {
            document.querySelector(configEngineEnd.nameId).setAttribute('visible', 'true');
            document.querySelector(configEngineEnd.nameCopyId).remove();
        });
    }
});