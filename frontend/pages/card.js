export default function card() {
    /*
    render() 
    {
      /*
      const mystyle = 
      {
        topnav {
          background-color: #333,
          overflow: hidden
        }
        
         //Style the links inside the navigation bar 
  
        .topnav a {
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }
        
         Change the color of links on hover 
        .topnav a:hover 
        {
          background-color: #ddd;
          color: black;
        }
        
         Add a color to the active/current link 
        .topnav a.active 
        {
          background-color: #4CAF50;
          color: white;
        }
      };
      
    }
    */
    return (
        <div class="card">
            <div class="header">
                <h2>Welcome</h2>
            </div>
            <div class="row">
                <div class="leftcolumn">
                    <div class="card">
                        <h2>Some gum</h2>
                        <h5>Title description, Sep 2, 2001</h5>
                        <div class="fakeimg" style="height:200px;">Place Holder Image</div>
                        <p>Gum</p>
                        <p>$5</p>
                    </div>
                    <div class="card">
                        <h2>Bed For Sales Boiii</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div class="fakeimg" style="height:200px;">Place Holder Image</div>
                        <p>Bed</p>
                        <p>$5000</p>
                    </div>
                </div>
            </div>
        </div>
      )
    }