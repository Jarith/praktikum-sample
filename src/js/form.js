const onSubmit = (e) => {
    e.preventDefault();

    const formData = Array.from(new FormData(e.target).entries()).reduce(
        (acc, [name, value]) => {
            acc[name] = value;

            return acc;
        },
        {}
    );

    console.log(formData);
};

document.addEventListener('DOMContentLoaded', () => {
    for (const form of document.forms) {
        form.addEventListener('submit', onSubmit);
    }
});
