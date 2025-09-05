import {Application, DeclarationReference} from 'typedoc';

// --- The symbol maps (threeApiSymbols, threeAddonSymbols) remain the same ---
const threeApiSymbols: Record<string, string> = {
  // Animation
  AnimationAction: 'animation/AnimationAction',
  AnimationClip: 'animation/AnimationClip',
  AnimationMixer: 'animation/AnimationMixer',
  AnimationObjectGroup: 'animation/AnimationObjectGroup',
  AnimationUtils: 'animation/AnimationUtils',
  KeyframeTrack: 'animation/KeyframeTrack',
  PropertyBinding: 'animation/PropertyBinding',
  PropertyMixer: 'animation/PropertyMixer',
  // Animation / Tracks
  BooleanKeyframeTrack: 'animation/tracks/BooleanKeyframeTrack',
  ColorKeyframeTrack: 'animation/tracks/ColorKeyframeTrack',
  NumberKeyframeTrack: 'animation/tracks/NumberKeyframeTrack',
  QuaternionKeyframeTrack: 'animation/tracks/QuaternionKeyframeTrack',
  StringKeyframeTrack: 'animation/tracks/StringKeyframeTrack',
  VectorKeyframeTrack: 'animation/tracks/VectorKeyframeTrack',
  // Audio
  Audio: 'audio/Audio',
  AudioAnalyser: 'audio/AudioAnalyser',
  AudioContext: 'audio/AudioContext',
  AudioListener: 'audio/AudioListener',
  PositionalAudio: 'audio/PositionalAudio',
  // Cameras
  ArrayCamera: 'cameras/ArrayCamera',
  Camera: 'cameras/Camera',
  CubeCamera: 'cameras/CubeCamera',
  OrthographicCamera: 'cameras/OrthographicCamera',
  PerspectiveCamera: 'cameras/PerspectiveCamera',
  StereoCamera: 'cameras/StereoCamera',
  // Core
  BufferAttribute: 'core/BufferAttribute',
  BufferGeometry: 'core/BufferGeometry',
  Clock: 'core/Clock',
  EventDispatcher: 'core/EventDispatcher',
  GLBufferAttribute: 'core/GLBufferAttribute',
  InstancedBufferAttribute: 'core/InstancedBufferAttribute',
  InstancedBufferGeometry: 'core/InstancedBufferGeometry',
  InstancedInterleavedBuffer: 'core/InstancedInterleavedBuffer',
  InterleavedBuffer: 'core/InterleavedBuffer',
  InterleavedBufferAttribute: 'core/InterleavedBufferAttribute',
  Layers: 'core/Layers',
  Object3D: 'core/Object3D',
  Raycaster: 'core/Raycaster',
  Timer: 'core/Timer',
  Uniform: 'core/Uniform',
  // Extras / Core
  Curve: 'extras/core/Curve',
  CurvePath: 'extras/core/CurvePath',
  Interpolations: 'extras/core/Interpolations',
  Path: 'extras/core/Path',
  Shape: 'extras/core/Shape',
  ShapePath: 'extras/core/ShapePath',
  // Extras / Curves
  ArcCurve: 'extras/curves/ArcCurve',
  CatmullRomCurve3: 'extras/curves/CatmullRomCurve3',
  CubicBezierCurve: 'extras/curves/CubicBezierCurve',
  CubicBezierCurve3: 'extras/curves/CubicBezierCurve3',
  EllipseCurve: 'extras/curves/EllipseCurve',
  LineCurve: 'extras/curves/LineCurve',
  LineCurve3: 'extras/curves/LineCurve3',
  QuadraticBezierCurve: 'extras/curves/QuadraticBezierCurve',
  QuadraticBezierCurve3: 'extras/curves/QuadraticBezierCurve3',
  SplineCurve: 'extras/curves/SplineCurve',
  // Geometries
  BoxGeometry: 'geometries/BoxGeometry',
  CapsuleGeometry: 'geometries/CapsuleGeometry',
  CircleGeometry: 'geometries/CircleGeometry',
  ConeGeometry: 'geometries/ConeGeometry',
  CylinderGeometry: 'geometries/CylinderGeometry',
  DodecahedronGeometry: 'geometries/DodecahedronGeometry',
  EdgesGeometry: 'geometries/EdgesGeometry',
  ExtrudeGeometry: 'geometries/ExtrudeGeometry',
  IcosahedronGeometry: 'geometries/IcosahedronGeometry',
  LatheGeometry: 'geometries/LatheGeometry',
  OctahedronGeometry: 'geometries/OctahedronGeometry',
  PlaneGeometry: 'geometries/PlaneGeometry',
  PolyhedronGeometry: 'geometries/PolyhedronGeometry',
  RingGeometry: 'geometries/RingGeometry',
  ShapeGeometry: 'geometries/ShapeGeometry',
  SphereGeometry: 'geometries/SphereGeometry',
  TetrahedronGeometry: 'geometries/TetrahedronGeometry',
  TorusGeometry: 'geometries/TorusGeometry',
  TorusKnotGeometry: 'geometries/TorusKnotGeometry',
  TubeGeometry: 'geometries/TubeGeometry',
  WireframeGeometry: 'geometries/WireframeGeometry',
  // Helpers
  ArrowHelper: 'helpers/ArrowHelper',
  AxesHelper: 'helpers/AxesHelper',
  BoxHelper: 'helpers/BoxHelper',
  Box3Helper: 'helpers/Box3Helper',
  CameraHelper: 'helpers/CameraHelper',
  DirectionalLightHelper: 'helpers/DirectionalLightHelper',
  GridHelper: 'helpers/GridHelper',
  PolarGridHelper: 'helpers/PolarGridHelper',
  HemisphereLightHelper: 'helpers/HemisphereLightHelper',
  PlaneHelper: 'helpers/PlaneHelper',
  PointLightHelper: 'helpers/PointLightHelper',
  SkeletonHelper: 'helpers/SkeletonHelper',
  SpotLightHelper: 'helpers/SpotLightHelper',
  // Lights
  AmbientLight: 'lights/AmbientLight',
  DirectionalLight: 'lights/DirectionalLight',
  HemisphereLight: 'lights/HemisphereLight',
  Light: 'lights/Light',
  LightProbe: 'lights/LightProbe',
  PointLight: 'lights/PointLight',
  RectAreaLight: 'lights/RectAreaLight',
  SpotLight: 'lights/SpotLight',
  // Lights / Shadows
  LightShadow: 'lights/shadows/LightShadow',
  PointLightShadow: 'lights/shadows/PointLightShadow',
  DirectionalLightShadow: 'lights/shadows/DirectionalLightShadow',
  SpotLightShadow: 'lights/shadows/SpotLightShadow',
  // Loaders
  AnimationLoader: 'loaders/AnimationLoader',
  AudioLoader: 'loaders/AudioLoader',
  BufferGeometryLoader: 'loaders/BufferGeometryLoader',
  Cache: 'loaders/Cache',
  CompressedTextureLoader: 'loaders/CompressedTextureLoader',
  CubeTextureLoader: 'loaders/CubeTextureLoader',
  DataTextureLoader: 'loaders/DataTextureLoader',
  FileLoader: 'loaders/FileLoader',
  ImageBitmapLoader: 'loaders/ImageBitmapLoader',
  ImageLoader: 'loaders/ImageLoader',
  Loader: 'loaders/Loader',
  LoaderUtils: 'loaders/LoaderUtils',
  MaterialLoader: 'loaders/MaterialLoader',
  ObjectLoader: 'loaders/ObjectLoader',
  TextureLoader: 'loaders/TextureLoader',
  // Loaders / Managers
  DefaultLoadingManager: 'loaders/managers/DefaultLoadingManager',
  LoadingManager: 'loaders/managers/LoadingManager',
  // Materials
  LineBasicMaterial: 'materials/LineBasicMaterial',
  LineDashedMaterial: 'materials/LineDashedMaterial',
  Material: 'materials/Material',
  MeshBasicMaterial: 'materials/MeshBasicMaterial',
  MeshDepthMaterial: 'materials/MeshDepthMaterial',
  MeshDistanceMaterial: 'materials/MeshDistanceMaterial',
  MeshLambertMaterial: 'materials/MeshLambertMaterial',
  MeshMatcapMaterial: 'materials/MeshMatcapMaterial',
  MeshNormalMaterial: 'materials/MeshNormalMaterial',
  MeshPhongMaterial: 'materials/MeshPhongMaterial',
  MeshPhysicalMaterial: 'materials/MeshPhysicalMaterial',
  MeshStandardMaterial: 'materials/MeshStandardMaterial',
  MeshToonMaterial: 'materials/MeshToonMaterial',
  PointsMaterial: 'materials/PointsMaterial',
  RawShaderMaterial: 'materials/RawShaderMaterial',
  ShaderMaterial: 'materials/ShaderMaterial',
  ShadowMaterial: 'materials/ShadowMaterial',
  SpriteMaterial: 'materials/SpriteMaterial',
  // Math
  Box2: 'math/Box2',
  Box3: 'math/Box3',
  Color: 'math/Color',
  Cylindrical: 'math/Cylindrical',
  Euler: 'math/Euler',
  Frustum: 'math/Frustum',
  Interpolant: 'math/Interpolant',
  Line3: 'math/Line3',
  MathUtils: 'math/MathUtils',
  Matrix2: 'math/Matrix2',
  Matrix3: 'math/Matrix3',
  Matrix4: 'math/Matrix4',
  Plane: 'math/Plane',
  Quaternion: 'math/Quaternion',
  Ray: 'math/Ray',
  Sphere: 'math/Sphere',
  Spherical: 'math/Spherical',
  SphericalHarmonics3: 'math/SphericalHarmonics3',
  Triangle: 'math/Triangle',
  Vector2: 'math/Vector2',
  Vector3: 'math/Vector3',
  Vector4: 'math/Vector4',
  // Math / Interpolants
  CubicInterpolant: 'math/interpolants/CubicInterpolant',
  DiscreteInterpolant: 'math/interpolants/DiscreteInterpolant',
  LinearInterpolant: 'math/interpolants/LinearInterpolant',
  QuaternionLinearInterpolant: 'math/interpolants/QuaternionLinearInterpolant',
  // Objects
  BatchedMesh: 'objects/BatchedMesh',
  Bone: 'objects/Bone',
  ClippingGroup: 'objects/ClippingGroup',
  Group: 'objects/Group',
  InstancedMesh: 'objects/InstancedMesh',
  Line: 'objects/Line',
  LineLoop: 'objects/LineLoop',
  LineSegments: 'objects/LineSegments',
  LOD: 'objects/LOD',
  Mesh: 'objects/Mesh',
  Points: 'objects/Points',
  Skeleton: 'objects/Skeleton',
  SkinnedMesh: 'objects/SkinnedMesh',
  Sprite: 'objects/Sprite',
  // Renderers
  WebGLRenderer: 'renderers/WebGLRenderer',
  WebGLRenderTarget: 'renderers/WebGLRenderTarget',
  WebGL3DRenderTarget: 'renderers/WebGL3DRenderTarget',
  WebGLArrayRenderTarget: 'renderers/WebGLArrayRenderTarget',
  WebGLCubeRenderTarget: 'renderers/WebGLCubeRenderTarget',
  WebGLProgram: 'renderers/WebGLProgram',
  // Renderers / Shaders
  ShaderChunk: 'renderers/shaders/ShaderChunk',
  ShaderLib: 'renderers/shaders/ShaderLib',
  UniformsLib: 'renderers/shaders/UniformsLib',
  UniformsUtils: 'renderers/shaders/UniformsUtils',
  // Renderers / WebXR
  WebXRManager: 'renderers/webxr/WebXRManager',
  // Scenes
  Fog: 'scenes/Fog',
  FogExp2: 'scenes/FogExp2',
  Scene: 'scenes/Scene',
  // Textures
  CanvasTexture: 'textures/CanvasTexture',
  CompressedTexture: 'textures/CompressedTexture',
  CompressedArrayTexture: 'textures/CompressedArrayTexture',
  CubeTexture: 'textures/CubeTexture',
  Data3DTexture: 'textures/Data3DTexture',
  DataArrayTexture: 'textures/DataArrayTexture',
  DataTexture: 'textures/DataTexture',
  DepthTexture: 'textures/DepthTexture',
  FramebufferTexture: 'textures/FramebufferTexture',
  Source: 'textures/Source',
  Texture: 'textures/Texture',
  VideoFrameTexture: 'textures/VideoFrameTexture',
  VideoTexture: 'textures/VideoTexture',
};
const threeAddonSymbols: Record<string, string> = {
  // Addons / Animations
  CCDIKSolver: 'animations/CCDIKSolver',
  // Addons / Controls
  ArcballControls: 'controls/ArcballControls',
  DragControls: 'controls/DragControls',
  FirstPersonControls: 'controls/FirstPersonControls',
  FlyControls: 'controls/FlyControls',
  MapControls: 'controls/MapControls',
  OrbitControls: 'controls/OrbitControls',
  PointerLockControls: 'controls/PointerLockControls',
  TrackballControls: 'controls/TrackballControls',
  TransformControls: 'controls/TransformControls',
  // Addons / Geometries
  ConvexGeometry: 'geometries/ConvexGeometry',
  DecalGeometry: 'geometries/DecalGeometry',
  ParametricGeometry: 'geometries/ParametricGeometry',
  TeapotGeometry: 'geometries/TeapotGeometry',
  TextGeometry: 'geometries/TextGeometry',
  // Addons / Helpers
  LightProbeHelper: 'helpers/LightProbeHelper',
  PositionalAudioHelper: 'helpers/PositionalAudioHelper',
  RectAreaLightHelper: 'helpers/RectAreaLightHelper',
  VertexNormalsHelper: 'helpers/VertexNormalsHelper',
  VertexTangentsHelper: 'helpers/VertexTangentsHelper',
  // Addons / Lights
  LightProbeGenerator: 'lights/LightProbeGenerator',
  // Addons / Lines
  Line2: 'lines/Line2',
  LineGeometry: 'lines/LineGeometry',
  LineMaterial: 'lines/LineMaterial',
  LineSegments2: 'lines/LineSegments2',
  LineSegmentsGeometry: 'lines/LineSegmentsGeometry',
  // Addons / Loaders
  '3DMLoader': 'loaders/3DMLoader',
  DRACOLoader: 'loaders/DRACOLoader',
  FontLoader: 'loaders/FontLoader',
  GLTFLoader: 'loaders/GLTFLoader',
  KTX2Loader: 'loaders/KTX2Loader',
  LDrawLoader: 'loaders/LDrawLoader',
  LUT3dlLoader: 'loaders/LUT3dlLoader',
  LUTCubeLoader: 'loaders/LUTCubeLoader',
  MTLLoader: 'loaders/MTLLoader',
  OBJLoader: 'loaders/OBJLoader',
  PCDLoader: 'loaders/PCDLoader',
  PDBLoader: 'loaders/PDBLoader',
  SVGLoader: 'loaders/SVGLoader',
  TGALoader: 'loaders/TGALoader',
  // Addons / Objects
  Lensflare: 'objects/Lensflare',
  Sky: 'objects/Sky',
  // Addons / Post-Processing
  EffectComposer: 'post-processing/EffectComposer',
  // Addons / Exporters
  DRACOExporter: 'exporters/DRACOExporter',
  EXRExporter: 'exporters/EXRExporter',
  GLTFExporter: 'exporters/GLTFExporter',
  KTX2Exporter: 'exporters/KTX2Exporter',
  OBJExporter: 'exporters/OBJExporter',
  PLYExporter: 'exporters/PLYExporter',
  STLExporter: 'exporters/STLExporter',
  USDZExporter: 'exporters/USDZExporter',
  // Addons / Math
  LookupTable: 'math/LookupTable',
  MeshSurfaceSampler: 'math/MeshSurfaceSampler',
  OBB: 'math/OBB',
  // Addons / Modifiers
  EdgeSplit: 'modifiers/EdgeSplit',
  // Addons / Renderers
  CSS2DRenderer: 'renderers/CSS2DRenderer',
  CSS3DRenderer: 'renderers/CSS3DRenderer',
  SVGRenderer: 'renderers/SVGRenderer',
  // Addons / Utils
  BufferGeometryUtils: 'utils/BufferGeometryUtils',
  CameraUtils: 'utils/CameraUtils',
  SceneUtils: 'utils/SceneUtils',
  SkeletonUtils: 'utils/SkeletonUtils',
  // Addons / WebXR
  XREstimatedLight: 'webxr/XREstimatedLight',
};


/**
 * The entry point for the TypeDoc plugin.
 * @param app The TypeDoc application instance.
 */
export function load(app: Application) {
  const baseUrlApi = 'https://threejs.org/docs/#api/en/';
  const baseUrlAddons = 'https://threejs.org/docs/#examples/en/';

  app.converter.addUnknownSymbolResolver((ref: DeclarationReference) => {
    // We only care about resolving links to symbols from the 'three' module.
    if (ref.moduleSource !== 'three' && ref.moduleSource !== '@types/three') {
      return;
    }

    if (!ref.symbolReference?.path) {
      return;
    }

    const path = ref.symbolReference.path;
    let className: string|undefined;
    let memberName: string|null = null;
    let classIndex = -1;

    // Find the last path segment that is a known class name.
    // This handles cases like `THREE.Object3D.add` correctly.
    for (let i = path.length - 1; i >= 0; i--) {
      const potentialClass = path[i].path;
      if (Object.prototype.hasOwnProperty.call(
              threeApiSymbols, potentialClass) ||
          Object.prototype.hasOwnProperty.call(
              threeAddonSymbols, potentialClass)) {
        className = potentialClass;
        classIndex = i;
        break;
      }
    }

    // If we couldn't find a known class in the link path, we can't resolve it.
    if (!className) {
      return;
    }

    // Anything after the class name in the path is part of the member name.
    if (path.length > classIndex + 1) {
      memberName = path.slice(classIndex + 1).map(p => p.path).join('.');
    }

    let baseUrl = '';
    let symbolPath = '';

    // Determine which base URL and path to use.
    if (Object.prototype.hasOwnProperty.call(threeApiSymbols, className)) {
      baseUrl = baseUrlApi;
      symbolPath = threeApiSymbols[className];
    } else {
      baseUrl = baseUrlAddons;
      symbolPath = threeAddonSymbols[className];
    }

    // Construct the final URL and the desired link text.
    const target =
        `${baseUrl}${symbolPath}${memberName ? `.${memberName}` : ''}`;
    const caption = `THREE.${className}${memberName ? `.${memberName}` : ''}`;

    // Return the object to control both the link target and the text.
    return {target, caption};
  });
}
