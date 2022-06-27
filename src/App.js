import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";

function App() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "unity/build.loader.js",
    dataUrl: "unity/build.data",
    frameworkUrl: "unity/build.framework.js",
    codeUrl: "unity/build.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);
  return (
    <div className="container">
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" unityProvider={unityProvider} />
      <div > 
        Let See More
      </div>
    </div>
  );
}
export default App;
