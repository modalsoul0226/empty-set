import Matter from 'matter-js';
import type { IChamferableBodyDefinition } from 'matter-js';

const { Engine, Render, Runner, MouseConstraint, Mouse, Composite, Bodies } = Matter;

export const sprite = (scene: HTMLElement) => {

    // create engine
    const engine = Engine.create();
    const world = engine.world;

    // create renderer
    const render = Render.create({
        element: scene,
        engine: engine,
        options: {
            width: 600,
            height: 600,
            showAngleIndicator: false,
            wireframes: false,
            background: "white"
        }
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const options: IChamferableBodyDefinition = {
        isStatic: true,
        render: {fillStyle: "white"}
    };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
        Bodies.rectangle(100, 100, 100, 100, { frictionAir: 0.001, render: { fillStyle: "#09823b"} }),
        Bodies.circle(250, 100, 50, { frictionAir: 0.001, render: { fillStyle: "#cd261c"} }),
        Bodies.rectangle(400, 100, 100, 100, { frictionAir: 0.001, render: { fillStyle: "#000000"} }),
        Bodies.circle(550, 100, 50, { frictionAir: 0.001, render: { fillStyle: "#000000"} }),

        // x, y, w, h
        Bodies.rectangle(400, -100, 800, 1, options),
        Bodies.rectangle(400, 700, 800, 1, options),
        Bodies.rectangle(800, 300, 1, 800, options),
        Bodies.rectangle(0, 300, 1, 800, options)
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

    // context for Sprite
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

