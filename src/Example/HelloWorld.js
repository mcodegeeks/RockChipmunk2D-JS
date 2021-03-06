/** ----------------------------------------------------------------------------------
 *
 *      File            HelloWorld.js
 *      Ported By       Young-Hwan Mun
 *      Contact         yh.msw9@gmail.com
 * 
 * -----------------------------------------------------------------------------------
 *   
 *      Created By      ChildhoodAndy on 14-3-9    
 *
 * -----------------------------------------------------------------------------------
 * 
 *      Permission is hereby granted, free of charge, to any person obtaining a copy
 *      of this software and associated documentation files (the "Software"), to deal
 *      in the Software without restriction, including without limitation the rights
 *      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *      copies of the Software, and to permit persons to whom the Software is
 *      furnished to do so, subject to the following conditions:
 * 
 *      The above copyright notice and this permission notice shall be included in
 *      all copies or substantial portions of the Software.
 * 
 *      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *      THE SOFTWARE.
 *
 * ----------------------------------------------------------------------------------- */ 

msw.HelloWorld = msw.BaseDemo.extend  
({
	onEnter:function ( ) 
	{
		this._super ( );
		
		var 	size   = VisibleRect.size ( );
		var		margin = cc.size ( 50, 200 );
		size.width  -= margin.width * 2;
		size.height -= margin.height + 100;
		
		for ( var i = 0; i < 10; i++ )
		{
			var		Box = this.createBox 
			(
				cp.v.add ( VisibleRect.leftBottom ( ), cc.p ( margin.width + cc.random0To1 ( ) * size.width, margin.height + cc.random0To1 ( ) * size.height ) ),
				cc.size ( 30 + cc.random0To1 ( ) * 50, 100 + cc.random0To1 ( ) * 50 ) 
			);
			this.addChildEx ( Box );
		}					
	},

	demo_info:function ( )
	{
		return "01 Hello World";
	},
	
	restartCallback:function ( sender )
	{
		var		scene = msw.HelloWorld.createScene ( );
		cc.director.runScene ( scene );
	},	
});

msw.HelloWorld.createScene = function ( )
{
    var 	scene = new cc.Scene ( );
    
    scene.initWithPhysics ( );
    scene.getPhysicsWorld ( ).setDebugDrawMask ( cc.PhysicsWorld.DEBUGDRAW_ALL );
    scene.getPhysicsWorld ( ).setGravity ( cp.v ( 0, -200 ) );
    
    var		layer = new msw.HelloWorld ( );
    layer.setPhysicWorld ( scene.getPhysicsWorld ( ) );
    scene.addChild ( layer );

    return scene;
};