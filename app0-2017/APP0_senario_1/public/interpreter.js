var initInterpreterApi = function(interpreter, scope) {
    var wrapper;
    wrapper = function(id) {
      Maze.move(0, id.toString());
    };
    interpreter.setProperty(scope, 'moveForward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      Maze.move(2, id.toString());
    };
    interpreter.setProperty(scope, 'moveBackward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      Maze.turn(0, id.toString());
    };
    interpreter.setProperty(scope, 'turnLeft',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      Maze.turn(1, id.toString());
    };
    interpreter.setProperty(scope, 'turnRight',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.isPath(0, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathForward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.isPath(1, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathRight',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.isPath(2, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathBackward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.isPath(3, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathLeft',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.getPlayerX());
    };
    interpreter.setProperty(scope, 'getPlayerX',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.getPlayerY());
    };
    interpreter.setProperty(scope, 'getPlayerY',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.getTargetX());
    };
    interpreter.setProperty(scope, 'getTargetX',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.getTargetY());
    };
    interpreter.setProperty(scope, 'getTargetY',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.getPlayerDir());
    };
    interpreter.setProperty(scope, 'getPlayerDir',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.canMove());
    };
    interpreter.setProperty(scope, 'canMove',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.isInFrontOfEnemy());
    };
    interpreter.setProperty(scope, 'isInFrontOfEnemy',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      return interpreter.createPrimitive(Maze.isOnTarget());
    };
    interpreter.setProperty(scope, 'isOnTarget',
        interpreter.createNativeFunction(wrapper));
    wrapper = function() {
      return interpreter.createPrimitive(Maze.notDone());
    };
    interpreter.setProperty(scope, 'notDone',
        interpreter.createNativeFunction(wrapper));

    Maze.log = [];
    Maze.reset(false);
};

var animate = function() {
    Maze.animate();
};
