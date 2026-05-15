import { Shader,CursorRipples, FloatingParticles} from "shaders/react";

function ShaderBackground() {
    return (
        <div className="fixed inset-0 z-10">
            <Shader>
            <FloatingParticles />
            <CursorRipples />
        </Shader>
        </div>
    )
}
export default ShaderBackground;