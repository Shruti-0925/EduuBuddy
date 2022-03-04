$(document).ready(function(){

    $('.counter100').each(function() {
      var $this = $(this),
          countTo = 100;
    
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
    
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum + "+");
          //alert('finished');
        }
      });
    });


    $('.counter200').each(function() {
        var $this = $(this),
            countTo = 200;
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum + "+");
            //alert('finished');
          }
        });
      });

      $('.counter1').each(function() {
        var $this = $(this),
            countTo = 1;
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 30,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum + "k+");
            //alert('finished');
          }
        });
      });


    });