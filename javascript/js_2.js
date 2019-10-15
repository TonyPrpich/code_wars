function expandedForm(num) {
    return num.toString().split("").reduce(function (prev, cur, index, arr) {
        return index === arr.length - 1 ? (cur === "0" ? prev.slice(0, -3) : prev + cur)
            : (cur === "0" ? prev : prev + cur + "0".repeat(arr.length - index - 1) + " + ");
    }, "");
}
