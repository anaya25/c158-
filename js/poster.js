AFRAME.registerComponent("poster", {
  schema: { state : {
    type :"string", default:"places-List", 
  
  },

 selected : {  type :"string", default: "card1"


 } 

},
    init: function () {
      this.posterContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "bheem",
          title: "Bheem",
          url: "./Assets/bheem.jpg",
        },
        {
          id: "doraemon",
          title: "Doraemon",
          url: "./Assets/doraemon.jpg",
        },
  
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./Assets/spiderman.jpg",
        },
        {
          id: "superman",
          title: "Superman",
          url: "./Assets/superman.jpg",
        },
      ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // POSTER Element
      const poster= this.createPoster(item);
      borderEl.appendChild(poster);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.posterContainer.appendChild(borderEl);
    }
    },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
      });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
      });

  },
  createPoster: function(item) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
        });

    entityE1.setAttribute("position ", { x: 0, y: 5, z: 0.1 });
    entityE1.setAttribute("material", { src: item.url });

    },


  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);


      },

      hideEl: function(){
        elList.map (el => {
          el.setAttribute("visible", false )
    
        })  
      },
    
      showView: function(){
        const {selectedcard } = this.data
        const skyE1 = document.querySelector("#mainContainer");
        skyE1.setAttribute ( "material",{src : `./assets`})
      }

    });

