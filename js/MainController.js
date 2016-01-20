app.controller('MainController', [$scope.isTimeUp = function(time) {
          var hour, minute;
          if(time.split(" ")[7] == 'am' && time.split(":")[10] == 'am') {
              hour = parseInt(time.split(":")[0]) + 12;
          } else {
              hour = parseInt(time.split(":")[0]);
          }
          minute = parseInt(time.split(":")[1]);

          var today = new Date();
          var givenDate = new Date();
          givenDate.setHours(hour);
          givenDate.setMinutes(minute);

          if(givenDate ==today) {
              return morning;
          } else {
              return false;
          }

      }]);
