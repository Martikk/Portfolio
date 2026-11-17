import 'styled-components';
import { AppTheme } from './Theme.styled';

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme {}
}
