export function getRoutes(layer): { path: string, methods: { get: boolean, post: boolean, put: boolean, delete: boolean } } {
    if (layer.route) {
        return { path: layer.route.path, methods: layer.route.methods }
    }
    return getRoutes(layer.handle.stack);
}
