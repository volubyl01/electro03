import './styles/styles.css'; // Import le fichier CSS de Tailwind
import { startStimulusApp } from '@symfony/stimulus-bridge';
import { registerReactControllerComponents } from '@symfony/ux-react';

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    true,
    /\.(j|t)sx?$/
));

// Registers React controller components to allow loading them from Twig
registerReactControllerComponents(require.context('./react/components', true, /\.(j|t)sx?$/));
