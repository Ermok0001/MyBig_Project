export function Support(){
    return(
        <div className="All_Support">
            <h1>Support</h1>
            <div className="Support">
                <div className="Checkbox_Support">
                <div>
                <input type="checkbox" />
                <>Не могу войти в свой аккаунт</>
                </div>
                <div>
                <input type="checkbox" />
                <>Не могу отменить бронь</>
                </div>
                </div>
                <div className="Info_Support">
                    <input type="text"  placeholder="Проблема в другом"/>
                    <button>Отправить</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}