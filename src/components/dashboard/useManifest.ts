import { useState } from "react"

const useManifest = () => {
    
    const [projects] = useState<Manifest[]>(require('@config/project-manifests.json'))

    const iconUrl = (project: Manifest) => {
        return require(`../../assets/images/${project.icon}`)
    }

    return {
        projects,
        iconUrl
    }
}

export interface Manifest {
    name: string
    url: string
    created: Date
    icon?: string
}

export default useManifest