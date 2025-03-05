export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) return undefined; // Если нет данных, возвращаем undefined (стор возьмёт initialState)
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Ошибка загрузки из localStorage", err);
        return undefined;
    }
};