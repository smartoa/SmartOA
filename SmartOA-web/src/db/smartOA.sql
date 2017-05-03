-----------------------------------------------
-- Export file for user LN_OSS               --
-- Created by jisheng on 2017/4/28, 15:20:47 --
-----------------------------------------------

set define off
spool smartOA.log

prompt
prompt Creating table OA_FLOW_BANDING
prompt ==============================
prompt
create table OA_FLOW_BANDING
(
  flow_banding_code VARCHAR2(30) not null,
  flow_banding_name VARCHAR2(30)
)
;
alter table OA_FLOW_BANDING
  add constraint PK_OA_FLOW_BANDING primary key (FLOW_BANDING_CODE);

prompt
prompt Creating table OA_FLOW_TACHE
prompt ============================
prompt
create table OA_FLOW_TACHE
(
  id            NUMBER(9) not null,
  flow_id       NUMBER(9) not null,
  tache_id      NUMBER(9) not null,
  tache_manager VARCHAR2(30),
  tache_rule    VARCHAR2(30),
  tache_operate VARCHAR2(30),
  tache_remend  VARCHAR2(30),
  tache_form    VARCHAR2(512)
)
;
create index IDX_OA_FLOW_ID on OA_FLOW_TACHE (FLOW_ID);
create index IDX_OA_TACHE_ID on OA_FLOW_TACHE (TACHE_ID);
alter table OA_FLOW_TACHE
  add constraint PK_OA_FLOW_TACHE primary key (ID);

prompt
prompt Creating table OA_FLOW_TYPE
prompt ===========================
prompt
create table OA_FLOW_TYPE
(
  flow_type_code VARCHAR2(3) not null,
  flow_type_name VARCHAR2(30)
)
;
alter table OA_FLOW_TYPE
  add constraint PK_OA_FLOW_TYPE primary key (FLOW_TYPE_CODE);

prompt
prompt Creating table OA_JOB
prompt =====================
prompt
create table OA_JOB
(
  job_id      NUMBER(9) not null,
  org_id      NUMBER(8) not null,
  job_name    VARCHAR2(60) not null,
  state       CHAR(1) not null,
  comments    VARCHAR2(255),
  update_date DATE
)
;
alter table OA_JOB
  add constraint PK_OA_JOB primary key (JOB_ID);

prompt
prompt Creating table OA_JOB_STAFF
prompt ===========================
prompt
create table OA_JOB_STAFF
(
  job_staff_id NUMBER(9) not null,
  job_id       NUMBER(9) not null,
  state        CHAR(1) not null,
  staff_id     NUMBER(9) not null
)
;
alter table OA_JOB_STAFF
  add constraint PK_OA_JOB_STAFF primary key (JOB_STAFF_ID);

prompt
prompt Creating table OA_ORG
prompt =====================
prompt
create table OA_ORG
(
  org_id        NUMBER(12) not null,
  area_id       NUMBER(12) not null,
  org_name      VARCHAR2(100) not null,
  parent_id     NUMBER(12),
  org_path_name VARCHAR2(512),
  org_path_code VARCHAR2(254),
  update_date   DATE,
  state         CHAR(1) not null,
  comments      VARCHAR2(255),
  org_grade     NUMBER(3)
)
;
comment on table OA_ORG
  is '×éÖ¯±í';
create index IDX_OA_ORG_PARENT_ID on OA_ORG (PARENT_ID);
alter table OA_ORG
  add constraint PK_OA_ORG primary key (ORG_ID);

prompt
prompt Creating table OA_PROCESS
prompt =========================
prompt
create table OA_PROCESS
(
  flow_id      NUMBER(9) not null,
  flow_name    VARCHAR2(60) not null,
  flow_type    VARCHAR2(30),
  flow_banding VARCHAR2(30) not null,
  flow_seq     NUMBER(6),
  flow_manager VARCHAR2(60),
  has_manager  NUMBER(3),
  description  VARCHAR2(512),
  create_date  DATE
)
;
alter table OA_PROCESS
  add constraint PK_OA_PROCESS primary key (FLOW_ID);

prompt
prompt Creating table OA_SELF_FORM
prompt ===========================
prompt
create table OA_SELF_FORM
(
  id           NUMBER(6) not null,
  form_id      VARCHAR2(30),
  form_name    VARCHAR2(30),
  create_date  DATE,
  comments     VARCHAR2(512),
  form_content VARCHAR2(4000),
  form_type    NUMBER(6),
  form_user    VARCHAR2(60)
)
;
create index IDX_OA_SELF_FORM_ID on OA_SELF_FORM (FORM_ID);
create index IDX_OA_SELF_FORM_NAME on OA_SELF_FORM (FORM_NAME);
alter table OA_SELF_FORM
  add constraint PK_OA_SELF_FORM primary key (ID);

prompt
prompt Creating table OA_STAFF
prompt =======================
prompt
create table OA_STAFF
(
  staff_id    NUMBER(20) not null,
  staff_name  VARCHAR2(64) not null,
  username    VARCHAR2(64) not null,
  password    VARCHAR2(64) not null,
  state       CHAR(1) not null,
  create_date DATE,
  comments    VARCHAR2(1024),
  staff_type  NUMBER(6)
)
;
alter table OA_STAFF
  add constraint PK_OA_STAFF primary key (STAFF_ID);

prompt
prompt Creating table OA_TACHE
prompt =======================
prompt
create table OA_TACHE
(
  id              NUMBER(9) not null,
  tache_name      VARCHAR2(60),
  tache_code      VARCHAR2(60),
  current_edition VARCHAR2(60),
  create_date     DATE not null,
  state           VARCHAR2(3) not null,
  state_date      DATE not null,
  deal_priority   NUMBER(1) not null
)
;
create index IDX_OA_TACHE_CODE on OA_TACHE (TACHE_CODE);
alter table OA_TACHE
  add constraint PK_OA_TACHE primary key (ID);


spool off
