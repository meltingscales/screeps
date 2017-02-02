unitsRefresh=     50;
resources=        30;
resourcesDelta=   51;


var spoopygutt =
{


  runEvery(func, secs)
  {
    if(420/*game.ticksElapsed*/ % secs == 0)
    {
      func();
    }
  }



}

module.exports = spoopygutt;
