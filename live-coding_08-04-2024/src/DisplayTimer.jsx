
export default function ({name, date, heure}) {
console.log(heure());
    return (
        <div>
            Bonjour {name}, nous somme le {date} et il est {heure()}
        </div>
    );
}