let configDonat = {
    name: 'donat-block-component',
    nameId: '#DonatBlockComponent',
    nameCopy: 'copy-donat-block-component',
    nameCopyId: '#DonatBlockComponentToCopy',
    properColor: '#F0FF00',
    hoverColor: 'lightblue',
    transparentColor: '#EF2D5E',
    material: 'side: double; transparent: false; opacity: 1; flatShading: true;'
}



AFRAME.registerComponent(configDonat.name, {
    init: function () {
        var el = this.el;  // <a-box>
        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configDonat.properColor) {
                el.setAttribute('color', configDonat.hoverColor);
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configDonat.properColor) {
                el.setAttribute('color', configDonat.transparentColor);
            }
        })

        el.addEventListener('click', function () {
            if(document.querySelector(configDonat.nameId) == null){return;}
            let color = el.getAttribute('color');
            let scoreText = document.querySelector('#score');
            let notThisBlock = document.querySelector('#notThisBlock');
            let notThisBlockAbox = document.querySelector('#notThisBlockAbox');

            notThisBlock.setAttribute('value', 'No Error');
            notThisBlock.removeAttribute('animation__2');
            notThisBlock.removeAttribute('animation__3');
            notThisBlock.removeAttribute('animation__4');
            notThisBlockAbox.removeAttribute('animation__1');

            if (document.querySelector(configDonat.nameId).getAttribute('visible') === true) {
                document.querySelector(configDonat.nameId).remove();
                if (color !== configDonat.properColor) {
                    score++
                    scoreText.setAttribute('value', score.toString());
                    el.setAttribute('color', configDonat.properColor);
                    el.setAttribute('material', configDonat.material);
                    el.setAttribute('animation__1', 'property: color; to: #00FFF0; dir: alternate; dur: 3000; loop: true');

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
            }


        });
    }
});

AFRAME.registerComponent(configDonat.nameCopy, {

    init: function () {

        var el = this.el;  // <a-box>


        el.addEventListener('click', function () {
            document.querySelector(configDonat.nameId).setAttribute('visible', 'true');
            document.querySelector(configDonat.nameCopyId).remove();
        });
    }
});