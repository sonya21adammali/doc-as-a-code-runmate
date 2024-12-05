---
title: ERD
sidebar_position: 1
---

# Модель данных

import Drawio from '@theme/Drawio'
import diagram from '!!raw-loader!./model.drawio';

<Drawio content={diagram} editable={false} />

## Runs

| Название    | Тип          | Описание                                             |
| ----------- | ------------ | --------------------------------------------------- |
| id          | UUID         | Уникальный идентификатор пробежки                   |
| user_id     | UUID         | Внешний ключ на таблицу Users                       |
| date        | TIMESTAMP    | Дата и время пробежки                               |
| location    | VARCHAR(255) | Место старта пробежки (обязательно)                 |
| distance    | INTEGER      | Дистанция (обязательно, должна быть положительной)  |
| status      | status_enum  | Статус пробежки (ENUM)                              |

### Описание связей и ограничений
- **id** — первичный ключ.
- **user_id** — внешний ключ на таблицу `Users`, с каскадным удалением (`ON DELETE CASCADE`).
- **distance** — значение обязательно должно быть больше нуля (`CHECK (distance > 0)`).
- **status** — тип данных `status_enum` используется для определения статуса пробежки.

Пример SQL для создания таблицы:

```sql
CREATE TABLE Runs (
    id UUID PRIMARY KEY,                    
    user_id UUID NOT NULL,                  -- Внешний ключ на таблицу Users
    date TIMESTAMP NOT NULL,                -- Дата и время пробежки
    location VARCHAR(255) NOT NULL,         -- Место старта пробежки обязательно
    distance INTEGER NOT NULL CHECK (distance > 0), -- Дистанция обязательна и должна быть положительной
    status status_enum NOT NULL,            -- Статус пробежки (ENUM)
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE
);
