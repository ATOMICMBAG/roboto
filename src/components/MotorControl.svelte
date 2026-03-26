<script>
    import { sendWS } from "../store/ws.js";
    let servoAngle = 90;
    let stepperPos = 0;

    function moveServo() {
        sendWS({ type: "servo_move", angle: servoAngle });
    }

    function moveStepper() {
        sendWS({ type: "stepper_move", pos: stepperPos });
    }
</script>

<div class="panel">
    <h2>Motor Control</h2>

    <label for="servo-angle">Servo Angle: {servoAngle}°</label>
    <input id="servo-angle" type="range" min="0" max="180" bind:value={servoAngle} on:change={moveServo} />

    <label for="stepper-pos">Stepper Position (mm)</label>
    <input id="stepper-pos" type="number" bind:value={stepperPos} />
    <button on:click={moveStepper}>Move</button>
</div>

<style>
.panel {
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 3px;
    background: #e7e7e7;
    color: #000000;
}
</style>
