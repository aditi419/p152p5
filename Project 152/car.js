AFRAME.registerComponent('car-model',{
    schema: {
        modelRef: {
            type: 'string',
            default:'./vintage_racing_car/scene.gltf',
        },
        clickCounter: {type:'number', default:0}
    },

    init: function(){
        this.el.setAttribute('gltf-model',this.data.modelRef)
        const position = {x:0, y:45, z:185}
        const rotation = {x:0, y:-100, z:0}
        this.el.setAttribute('position', position)
        this.el.setAttribute('rotation', rotation)
        this.el.setAttribute('scale', '3 3 3')
    },
    update: function(){
        window.addEventListener('click', (e) => {
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickCounter === 1){
                const rotation = {x:0, y:20, z:0}
                this.el.setAttribute('rotation', rotation)
            }

            else if(this.data.clickCounter === 2){
                const rotation = {x:0, y:100, z:0}
                this.el.setAttribute('rotation', rotation)
            }

            else if(this.data.clickCounter === 3){
                const rotation = {x:0, y:-200, z:0}
                this.el.setAttribute('rotation', rotation)
            }

            else if(this.data.clickCounter === 4){
                const rotation = {x:0, y:-100, z:0}
                this.el.setAttribute('rotation', rotation)
                const camerael = document.querySelector('#camera')
                const position = {x:0, y:195, z:450}
                camerael.setAttribute('position', position)
            }

            else{
                const rotation = {x:0, y:-100, z:0}
                this.el.setAttribute('rotation', rotation)
                const camerael = document.querySelector('#camera')
                const position = {x:0, y:50, z:250}
                camerael.setAttribute('position', position)
                this.data.clickCounter = 0
            }
        })
    }

});