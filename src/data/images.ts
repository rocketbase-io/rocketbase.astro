import path from 'node:path';

const images = import.meta.glob('../../public/_remote-cache/**/*', { eager: true })
export const imageMap = Object.fromEntries(
    Object.entries(images).map(([p, mod]) => {
        const filename = p.split('/').pop()!
        return [path.parse(filename).name, (mod as any).default]
    })
)