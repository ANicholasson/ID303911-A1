const homepage = () => {
    return (`
        <div class="container">
            <h1>Items for sale</h1>
            ` + productItem("/home/aronmn/Development/NTNU_MobDist/Oppgave1/src/assets/img/exampleProd.jpg", "Bullshit Laptop x123", 4500, 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") + `
        
            <!-- New Item Button -->
              <a class="btn-floating add-btn btn-large waves-effect waves-light red right"><i class="material-icons">add</i></a>
        </div>
    `);
};