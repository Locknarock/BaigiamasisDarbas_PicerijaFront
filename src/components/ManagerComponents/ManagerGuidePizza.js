import { useTranslationAndLanguageChange } from "../TranslationComponents/TranslationUtils";

export default function ManagerGuidePizza() {
    const { t, changeLanguageHandler } = useTranslationAndLanguageChange();
    return (
        <div>
            <ul className="managerGuidInstructionsList">
                <li>
                    <h2>{t("Adding New Pizza")}</h2>
                    <p>{t("At the top of Pizza page there is button")}   <button className="btn btn-success">{t("Add New Pizza")} </button>
                        {t("Clicked button opens new Pizza creation window. Fill all fields and Press SUBMIT. New Pizza will be created.")}
                    </p>
                </li>
                <li>
                    <h2>{t("Managment of Pizza List Page")}</h2>
                    <p> {t("Bellow you can see pizza list in a table")}</p>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>{t("Line Number")}</th>
                                <th>{t("Pizza Name")}</th>
                                <th>{t("Pizza Picture")}</th>
                                <th>{t("Unit Price")}</th>
                                <th>{t("Pizza Size")}</th>
                                <th>{t("Products")}</th>
                                <th>{t("Actions")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>1</td>
                                <td>Margarita</td>
                                <td> {t("Pizza Picture")} </td>
                                <td> 15 €</td>
                                <td> 44 </td>
                                <td> {t("Mozzarella")}<br /> {t("Spinach")}<br /> {t("Tomato pasta sauce")} </td>
                                <td>
                                    <button type="button" className="btn btn-warning"> {t("Update")} </button>
                                    <button type="button" className="btn btn-danger" > {t("Delete")} </button>
                                </td>
                            </tr>
                            <tr><td scope="row">2</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                        </tbody>
                    </table>
                    <p>{t("In table column Actions you can see buttons")} <br />
                        <button type="button" className="btn btn-warning"> {t("Update")} </button>
                        <button type="button" className="btn btn-danger" > {t("Delete")} </button> <br />
                        {t("Clicked Update button opens Pizza update window. Change all required fields and Press SUBMIT. Pizza will be updated.")}<br />
                        {t("Clicked Delete button will delete Pizza from table")}
                    </p>
                </li>
            </ul>
        </div>
    );
}