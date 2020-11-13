function() {
    
    this.label = 'pingball';   
    this.xvar=Math.random();
    this.yvar=Math.random();
    this.xspeed=0.1;
    this.yspeed=0.1;
    this.time=0
    this.delay=false
this.render = function() {

    this.xvar+=this.xspeed;
    this.yvar+=this.yspeed;
    mDrawDisk([this.xvar,this.yvar],1)
    var sketches = sk().intersectingSketches();
    for (var i = 0 ; i < sketches.length ; i++) {
        if (isDef(sk().onIntersect))
           sk().onIntersect(sketches[i]);
        if (isDef(sketches[i].onIntersect))
           sketches[i].onIntersect(sk());
        
     }//this allows us to check if the sketches are intersecting even when the mouse is not moving

    }
    this.onIntersect = function(otherSketch) {
    
    
    if(!this.delay)
    {
    if(otherSketch.label=="pingpong1")
    this.yspeed=-this.yspeed
    if(otherSketch.label=="pingpong2")
    this.xspeed=-this.xspeed
    if(otherSketch.label=="pingboard")
    {
        this.yspeed=-this.yspeed
    }
    this.delay=true
    this.time = Date.now()
    console.log("Allo1")
    }
    else
    {
        console.log("Allo")
        if(Date.now()-this.time>100)
        {
            this.delay=false
        }
    }

    
    }
    
}