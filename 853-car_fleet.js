var carFleet = function(target, position, speed) {
    let cars = Array(position.length);
    let fleets = cars.length;
    let prevFleetFinishTime = 0;

    for (let i = 0; i < cars.length; i++) {
        cars[i] = [position[i], speed[i]];
    }

    cars.sort((a, b) => (a[0] - b[0]));

    for (let i = cars.length - 1; i >= 0; i--) {
        let currentFleetFinishTime = ((target - cars[i][0]) / cars[i][1]);
        if (currentFleetFinishTime <= prevFleetFinishTime) {
            fleets--;
        } else {
            prevFleetFinishTime = currentFleetFinishTime;
        }
    }

    return fleets;
};