(function() { 
	// library START
    (function () {

        var that = this;
        var haveNumbers = false;
        var showValue = false;
        var numOfBigTicks = 4;
        var numOfSmallTicks = 3;
        var indicator = 1.0;
        var needleColor = "#D80000";
        var startValue = 0;
        var endValue = 100;
        var indicatorHop = 0.5;
        var title = "Insert Title Here";
        var showedValue = "No Value";
        var gradientColor = true;
        var firstColor = "#FA1E1E"
        var secondColor = "#FCFA4E";
        var thirdColor = "#2BFC23";
        var startSecondColor = 20;
        var startThirdColor = 80;
        var mainColor = "#EDEDED"
        var ttColor = "#000000";
    
        
        this.fCanvas = null;
        this.sCanvas = null;
        this.pTitle = null;
        
        //FUNCTION CALLED IN ITIALIZE
        this.init = function() {
            this.fCanvas = document.createElement("canvas");
            this.sCanvas = document.createElement("canvas");
            this.pTitle = document.createElement("p");
            this.pTitle.style.position = 'absolute';
            this.pTitle.style.top = '-50px';
            this.pTitle.style.width = '100%';
            this.pTitle.style.left = '0px';
            this.pTitle.style.textAlign = 'center';
            this.fCanvas.style.position = 'absolute';
            this.fCanvas.style.left = '0px';
            this.fCanvas.style.top = '0px';
            this.sCanvas.style.position = 'absolute';
            this.sCanvas.style.left = '0px';
            this.sCanvas.style.top = '0px';
            this.$().append($(this.pTitle));
            this.$().append($(this.fCanvas));
            this.$().append($(this.sCanvas));
        };
    
        //FUNCTION CALLED AFTER RENDERING
        this.afterUpdate = function() {
            setTimeout(function(){proGauge2()},250);
        };
    
    
        //GETTERS AND SETTERS FOR VARIABLES
        this.haveNumbers = function(value) {
            if (value == undefined) {
                return haveNumbers;
            } else {
                haveNumbers = value;
                return this;
            }
        };	
    
        this.numOfSmallTicks = function(value) {
            if (value == undefined) {
                return numOfSmallTicks;
            } else {
                numOfSmallTicks = value;
                return this;
            }
        };	
    
        this.numOfBigTicks = function(value) {
            if (value == undefined) {
                return numOfBigTicks;
            } else {
                numOfBigTicks = value;
                return this;
            }
        };	
    
        this.indicator = function(value) {
            if (value == undefined) {
                return indicator;
            } else {
                indicator = value;
                return this;
            }
        };
        
        this.needleColor = function(value) {
            if (value == undefined) {
                return needleColor;
            } else {
                needleColor = value;
                return this;
            }
        };
    
        this.title = function(value) {
            if (value == undefined) {
                return title;
            } else {
                title = value;
                return this;
            }
        };
    
        this.showValue = function(value) {
            if (value == undefined) {
                return showValue;
            } else {
                showValue = value;
                return this;
            }
        };	
        
        this.startValue = function(value) {
            if (value == undefined) {
                return startValue;
            } else {
                startValue = value;
                return this;
            }
        };	
        
        this.endValue = function(value) {
            if (value == undefined) {
                return endValue;
            } else {
                endValue = value;
                return this;
            }
        };	
        
        this.indicatorHop = function(value) {
            if (value == undefined) {
                return indicatorHop;
            } else {
                indicatorHop = value;
                return this;
            }
        };
        
        this.showedValue = function(value) {
            if (value == undefined) {
                return showedValue;
            } else {
                showedValue = value;
                return this;
            }
        };
    
        this.gradientColor = function(value) {
            if (value == undefined) {
                return gradientColor;
            } else {
                gradientColor = value;
                return this;
            }
        };
    
        this.firstColor = function(value) {
            if (value == undefined) {
                return firstColor;
            } else {
                firstColor = value;
                return this;
            }
        };	
    
        this.secondColor = function(value) {
            if (value == undefined) {
                return secondColor;
            } else {
                secondColor = value;
                return this;
            }
        };	
    
        this.thirdColor = function(value) {
            if (value == undefined) {
                return thirdColor;
            } else {
                thirdColor = value;
                return this;
            }
        };	
    
        this.mainColor = function(value) {
            if (value == undefined) {
                return mainColor;
            } else {
                mainColor = value;
                return this;
            }
        };		
        
        this.startSecondColor = function(value) {
            if (value == undefined) {
                return startSecondColor;
            } else {
                startSecondColor = value;
                return this;
            }
        };	
    
        this.startThirdColor = function(value) {
            if (value == undefined) {
                return startThirdColor;
            } else {
                startThirdColor = value;
                return this;
            }
        };		
        
        this.ttColor = function(value) {
            if (value == undefined) {
                return ttColor;
            } else {
                ttColor = value;
                return this;
            }
        };		
        
    
        
        //MAIN FUNCTION OF THE COMPONENT
        function proGauge2(){
            
            //INITIALIZE VARIABLES
            var DEG2RAD = Math.PI / 180;
            var UNIT = 100;
            
            var width = that.$().width();
            var height = that.$().height();
    
            
            that.fCanvas.width=width;
            that.fCanvas.height=height;
            
            that.sCanvas.width=width;
            that.sCanvas.height=height;
            
            var scale = Math.min(width,height) / (2*UNIT);
            
            that.pTitle.style.fontSize=15*scale+"px";
            that.pTitle.innerHTML = ""+title;
            
            var bodyWidth = 3.5  * scale;
            
            var halfWidth = UNIT * scale;
    
            
            //TICKS DIMENSIONS
            var hourTickStart = 75  * scale;
            var hourTickEnd = 85  * scale;
            var hourTickWidth = 3  * scale;
            
            var minuteTickStart = 81  * scale;
            var minuteTickEnd = 85  * scale;
            var minuteTickWidth = 3  * scale;
    
            var secondHandEnd = 90  * scale;
            var secondHandWidth = 3  * scale;
            var bossRadius = 8.0  * scale;
    
            var shadowOffsetX = 2  * scale;
            var shadowOffsetY = 2  * scale;
            var shadowOffsetBlur = 5 * scale;
            var shadowColor = "rgba(0, 0, 0, 0.4)";
            
    
            //INDICATOR TAIL LENGTH
            var indtail = 25 * scale;
            //TICK2TICK ANGLE
            var t2trad = (240/(numOfBigTicks-1));
            //END SIZE TICKS	
            
            //INITIALIZE CANVAS DIMENSIONS
        
            
            var ctx = that.fCanvas.getContext("2d");
            ctx.clearRect(0, 0,  2 * halfWidth, 2 * halfWidth);
    
            // Radius and center of the circle to be drawn. Variable according to the size of the canvas.
            var centerX = that.fCanvas.width / 2;
            var centerY = that.fCanvas.height / 2;
            var radius = halfWidth-bodyWidth/2;
            
            
            //START DESIGNING DASH
            ctx.beginPath();
            //TRACK CIRCLE
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
            //CHOOSE THE FILLING COLOR
            ctx.fillStyle = 'white';
            //FILL
            ctx.fill();
            //CHOOSE EDGE WIDTH
            ctx.lineWidth = bodyWidth;
    
            //GRADIENT FOR THE EDGE
            var grd=ctx.createLinearGradient(25,25,width,height);
            grd.addColorStop(0,"white");
            grd.addColorStop(1,mainColor);
    
    
            //BORDER COLOR
            ctx.strokeStyle = grd;
    
            //FINISHED DRAWING
            ctx.stroke();
    
            //START DRAWING
            ctx.beginPath();
            //TRACK CIRCLE
            ctx.arc(centerX, centerY, (radius-bodyWidth), 0, 2 * Math.PI, true);
            //CHOOSE THE FILLING COLOR
            ctx.fillStyle = mainColor;
            //FILLING
            ctx.fill();
            //CHOOSE EDGE WIDTH
            ctx.lineWidth = bodyWidth;
    
            //GRADIENT FOR THE EDGE
            var grd=ctx.createLinearGradient(25,25,width,height);
            grd.addColorStop(0,mainColor);
            grd.addColorStop(1,"white");
        
    
            //EDGE COLOR
            ctx.strokeStyle = grd;
        
            //FINISHED DRAWING
            ctx.stroke();
    
            //END BODY CLOCK DESIGN
    
            //START COLOR DRAWING
    if(!gradientColor){
        ctx.beginPath();
        //WHEEL 30 ON THE LEFT
        //TRACK CIRCLE
        ctx.arc(centerX, centerY, (radius-bodyWidth*2), 150*DEG2RAD, (150 + startSecondColor*240/100)*DEG2RAD, false);
    
        //CHOOSE EDGE WIDTH
        ctx.lineWidth = bodyWidth;
    
        ctx.lineCap = "square";
        
        //EDGE COLOR
        ctx.strokeStyle = firstColor;
        
        //FINISHED DRAWING
        ctx.stroke();
        
        ctx.beginPath();

        // WHEEL 30 ON THE LEFT
        // TRACK CIRCLE
        ctx.arc(centerX, centerY, (radius-bodyWidth*2), (150 + startSecondColor*240/100)*DEG2RAD, (150 + startThirdColor*240/100)*DEG2RAD, false);
    
        //CHOOSE EDGE WIDTH
        ctx.lineWidth = bodyWidth;
    
        ctx.lineCap = "square";
        
        //EDGE COLOR
        ctx.strokeStyle = secondColor;
        
        //FINISHED DRAWING
        ctx.stroke();
        
        ctx.beginPath();

        // WHEEL 30 ON THE LEFT
        // TRACK CIRCLE
        ctx.arc(centerX, centerY, (radius-bodyWidth*2), (150 + startThirdColor*240/100)*DEG2RAD, 390*DEG2RAD, false);
    
        //CHOOSE EDGE WIDTH
        ctx.lineWidth = bodyWidth;
    
        ctx.lineCap = "square";
        
        //EDGE COLOR
        ctx.strokeStyle = thirdColor;
        
        //FINISHED DRAWING
        ctx.stroke();
        
    }else{
        ctx.beginPath();
    

        // WHEEL 30 ON THE LEFT
        // TRACK CIRCLE
        //alert(centerX);
        sx = centerX+Math.cos(210*DEG2RAD)*(radius-bodyWidth*2);
        sy = centerY+Math.sin(210*DEG2RAD)*(radius-bodyWidth*2);
        dx = centerX+Math.cos(-30*DEG2RAD)*(radius-bodyWidth*2);
        dy = centerY+Math.sin(-30*DEG2RAD)*(radius-bodyWidth*2);
        ctx.arc(centerX, centerY, (radius-bodyWidth*2), 30*DEG2RAD, 150*DEG2RAD, true);
        
        //alert(sx+" "+sy);
        //CHOOSE EDGE WIDTH
        ctx.lineWidth = bodyWidth;
    
        ctx.lineCap = "round";
    
    
        //GRADIENT FOR THE EDGE
        var grd=ctx.createLinearGradient(sx,sy,dx,dy);
        grd.addColorStop(0,firstColor);
        grd.addColorStop((startSecondColor/100),secondColor);
        grd.addColorStop((startThirdColor/100),secondColor);
        grd.addColorStop(1,thirdColor);
    
    
        //EDGE COLOR
        ctx.strokeStyle = grd;
    
        //FINISHED DRAWING
        ctx.stroke();
    
        //END DRAWING COLORS
    }
    
    
            //WRITE VALUE IF true
            if(showValue){
                ctx.font = 13*scale+'pt Georgia';
                ctx.textAlign = 'center';
                ctx.fillStyle = ttColor;
                ctx.fillText(showedValue, centerX,centerY+50*scale);
            }
    
            //START TICKS
    
            // draw big ticks		
            ctx.translate(centerX, centerY);
            ctx.strokeStyle=ttColor;
            ctx.lineCap = "round";
            ctx.lineWidth = hourTickWidth;
            ctx.save();
    
            ctx.rotate((150-t2trad)*DEG2RAD);
            
            
            var numInterval = (endValue-startValue)/(numOfBigTicks-1);
            
            
            for(var i = 0; i < numOfBigTicks; i++) {
                ctx.rotate(t2trad * DEG2RAD);
                ctx.beginPath();
                ctx.moveTo(hourTickStart, 0);
                ctx.lineTo(hourTickEnd, 0);
                ctx.stroke();
                if(haveNumbers){
                    var ndist = hourTickEnd-(20*scale);
                    ctx.translate(ndist,0);
                    ctx.rotate((210-(t2trad*i))*DEG2RAD);
                    ctx.font=12*scale+"px Georgia";
                    ctx.textAlign='start';
                    ctx.fillStyle=ttColor;
                    if((Math.round(startValue+(i*numInterval)))>=100&&(i>(numOfBigTicks/2))){
                        ctx.fillText(Math.round(startValue+(i*numInterval)),(-15*scale),(5*scale));			
                    }else if(i<(numOfBigTicks*2/3)){
                        ctx.fillText(Math.round(startValue+(i*numInterval)),(-5*scale),(5*scale));	
                    }else{
                        ctx.fillText(Math.round(startValue+(i*numInterval)),(-10*scale),(5*scale));
                    }
                    ctx.rotate(-(210-(t2trad*i))*DEG2RAD);
                    ctx.translate(-ndist,0);
                }
            }
            ctx.restore();
            //end big ticks
    
            // draw minute ticks		
            ctx.save();
            ctx.lineWidth =  minuteTickWidth;
            ctx.rotate(150*DEG2RAD);
            for (i = 0; i < numOfBigTicks-1; i++) {
                for(k=0; k<numOfSmallTicks; k++){
                    ctx.rotate(t2trad / (numOfSmallTicks+1) * DEG2RAD);
                    ctx.beginPath();
                    ctx.moveTo(minuteTickStart, 0);
                    ctx.lineTo(minuteTickEnd, 0);
                    ctx.stroke();
    
                }
                ctx.rotate(t2trad / (numOfSmallTicks+1) * DEG2RAD);
            }
            ctx.restore();
    
            //END TICK DESIGN
            
        
            // ANIMATION AND HAND DRAWING
            var myVar = setInterval(function(){drawIndicator()}, 1);
    
    
    
            function myStopFunction() {
                clearInterval(myVar);
            }
            
            var currentIndicator = 0.5;
            var maxIndicator = indicator*240/100
    
            var ctx = that.sCanvas.getContext("2d");
            ctx.translate(centerX, centerY);
    
            ctx.rotate(150*DEG2RAD);
            function drawIndicator() {
                // Clear the canvas
                ctx.translate(-centerX,-centerY);
                ctx.clearRect(0,0, width, height);
                ctx.translate(centerX,centerY);
                ctx.save();
                ctx.shadowOffsetX = shadowOffsetX;
                ctx.shadowOffsetY = shadowOffsetY;
                ctx.shadowBlur = shadowOffsetBlur;
                ctx.shadowColor = shadowColor;
            
                var nextValue = currentIndicator + indicatorHop;
                var thisHop = indicatorHop;
                if(nextValue > maxIndicator) {
                    thisHop = indicatorHop - (nextValue - maxIndicator);
                }
                ctx.rotate(thisHop  * DEG2RAD);
                ctx.strokeStyle = needleColor;
                ctx.lineWidth = secondHandWidth;
                ctx.beginPath();
                ctx.moveTo(secondHandEnd-5*scale, 0);
                ctx.lineTo(-indtail,5*scale);
                ctx.lineTo(-indtail,-5*scale);
                ctx.fillStyle = needleColor;
                ctx.fill();
            
                // draw boss	
                ctx.save();
                ctx.fillStyle = "grey";
                ctx.beginPath();
                ctx.globalAlpha=0.2;
                ctx.arc(0, 0, bossRadius*1.5, 0, 360 * DEG2RAD);
                ctx.fill();
                ctx.restore();
            
        
                ctx.save();
                var grd=ctx.createLinearGradient(-10,-10,10,10);
                grd.addColorStop(0,"white");
                grd.addColorStop(1,mainColor);
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(0, 0, bossRadius, 0, 360 * DEG2RAD);
                ctx.fill();
                ctx.restore();
            
    
                if(currentIndicator>=(maxIndicator)){
                    myStopFunction();
                } else {
                    currentIndicator+=thisHop;
                }
            }
        }
        
    
    });
    // library END
	let template = document.createElement("template");
	template.innerHTML = `
			<style>
				:host {
					display: block;
				} 
			</style> 
            <div id="chart_div"></div>
            <canvas id="myCanvas" width="200" height="100" style="border:3px solid #d3d3d3;">
Your browser does not support the HTML canvas tag.</canvas>

        <script>
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(200,100);
            ctx.stroke();
        </script>
		`;

	class proGauge extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {};
		}

		connectedCallback(){
			
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };

		}

		onCustomWidgetAfterUpdate(changedProperties) {
			console.log("onCustomWidgetAfterUpdate")
			console.log("this._props prop = ", this._props);
			this._props = { ...this._props, ...changedProperties };

			var ctx = this.shadowRoot.getElementById('myCanvas');

			var myProps = this._props
			
			// google.charts.load('current', {'packages':['gauge']});
			// google.charts.setOnLoadCallback(function() {
			// 	drawChart(myProps);
            // });
            var chart = new proGauge(ctx);
            //chart.draw(myProps, options);
            loadthis(this);

			console.log("changedProperties = ", changedProperties);

		}
	}
    function loadthis(that) {
        var that_ = that;

        let content = document.createElement('div');
        content.slot = "content";
        that_.appendChild(content);

        let div0 = document.createElement('div');   
        div0.innerHTML = '<h1>HERE</h1>';
        that_.appendChild(div0); 
    }
	customElements.define("com-protiviti-demo-gauge", proGauge);
})();