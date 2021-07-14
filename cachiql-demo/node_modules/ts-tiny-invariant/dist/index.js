const isProduction = process.env.NODE_ENV === 'production';
const prefix = 'Invariant failed';
export default function invariant(condition, message) {
    if (condition) {
        return;
    }
    throw new Error(isProduction ? prefix : `${prefix}: ${message || ''}`);
}
//# sourceMappingURL=index.js.map