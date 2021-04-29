import { IconGitHub, IconLinkedin, IconExternal } from '.'

function RenderIcon({ name, height, width }) {
    switch (name) {
        case 'GitHub':
            return <IconGitHub height={height} width={width} />
        case 'Linkedin':
            return <IconLinkedin height={height} width={width} />
        default:
            return <IconExternal height={height} width={width} />
    }
}

export default RenderIcon
