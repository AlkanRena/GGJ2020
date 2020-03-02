let configLargeAntena = {
    name: 'large-antena-block-component',
    nameId: '#LargeAntenaBlockComponent',
    nameCopy: 'copy-large-antena-block-component',
    nameCopyId: '#LargeAntenaBlockComponentToCopy',
    properColor: '#999',
    hoverColor: 'lightblue',
    transparentColor: '#EF2D5E',
    material: 'side: double; transparent: false; opacity: 1; flatShading: true;'
}

AFRAME.registerComponent(configLargeAntena.name, {
    init: function () {
        var el = this.el;  // <a-box>
        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configLargeAntena.properColor) {
                el.setAttribute('color', configLargeAntena.hoverColor);
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configLargeAntena.properColor) {
                el.setAttribute('color', configLargeAntena.transparentColor);
            }
        })

        el.addEventListener('click', function () {
            if(document.querySelector(configLargeAntena.nameId) == null){return;}
            let color = el.getAttribute('color');
            let scoreText = document.querySelector('#score');
            let notThisBlock = document.querySelector('#notThisBlock');
            let notThisBlockAbox = document.querySelector('#notThisBlockAbox');

            notThisBlock.setAttribute('value', 'No Error');
            notThisBlock.removeAttribute('animation__2');
            notThisBlock.removeAttribute('animation__3');
            notThisBlock.removeAttribute('animation__4');
            notThisBlockAbox.removeAttribute('animation__1');
            console.log(notThisBlock.getAttribute('animation__2'))

            if (document.querySelector(configLargeAntena.nameId).getAttribute('visible') === true) {
                document.querySelector(configLargeAntena.nameId).remove();
                if (color !== configLargeAntena.properColor) {
                    score++
                    scoreText.setAttribute('value', score.toString());
                    el.setAttribute('color', configLargeAntena.properColor);
                    el.setAttribute('material', configLargeAntena.material);
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

AFRAME.registerComponent(configLargeAntena.nameCopy, {

    init: function () {

        var el = this.el;  // <a-box>

        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configLargeAntena.properColor) {
                el.setAttribute('color', configLargeAntena.hoverColor);
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configLargeAntena.properColor) {
                el.setAttribute('color', configLargeAntena.transparentColor);
            }
        })

        el.addEventListener('click', function () {
            document.querySelector(configLargeAntena.nameId).setAttribute('visible', 'true');
            document.querySelector(configLargeAntena.nameCopyId).remove();
        });
    }
});