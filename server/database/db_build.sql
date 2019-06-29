
BEGIN;
  DROP TABLE IF EXISTS events;
CREATE TABLE events
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  start_date DATE NOT NULL,
  end_date DATE, 
  hierarchy_level INTEGER
);

INSERT into events
  (title, start_date, hierarchy_level)
VALUES
  ('event 1','1992-01-08' , 1);


INSERT into events
  (title, start_date, hierarchy_level)
VALUES
  ('event 2','1982-01-08' , 1);
INSERT into events
  (title, start_date, hierarchy_level)
VALUES
  ('event 3','2002-01-08' , 3);
INSERT into events
  (title, start_date, hierarchy_level)
VALUES
  ('event 4','2010-01-08' , 2);



  COMMIT;