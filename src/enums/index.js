import i18n from '@/i18n'

const enumInfo = {
  FeedbackTypeEnum: {
    REPAIR: { value: 0, desc: i18n.t('FeedbackTypeEnum.REPAIR') },
    COMPLAINT: { value: 1, desc: i18n.t('FeedbackTypeEnum.COMPLAINT') },
    PROPOSAL: { value: 2, desc: i18n.t('FeedbackTypeEnum.PROPOSAL') }
  },
  FeedbackResultEnum: {
    UNRESOLVED: { value: 0, desc: i18n.t('FeedbackResultEnum.UNRESOLVED') },
    RESOLVED: { value: 1, desc: i18n.t('FeedbackResultEnum.RESOLVED') },
    OTHER: { value: 2, desc: i18n.t('FeedbackResultEnum.OTHER') }
  },
  OverdueEnum: {
    OVERDUE: { value: 1, desc: i18n.t('OverdueEnum.OVERDUE') },
    NO_OVERDUE: { value: 0, desc: i18n.t('OverdueEnum.NO_OVERDUE') }
  },
  NoticeToEnum: {
    ALL_OWNER: { value: 0, desc: i18n.t('NoticeToEnum.ALL_OWNER') },
    ALL_USER: { value: 1, desc: i18n.t('NoticeToEnum.ALL_USER') },
    ALL: { value: 2, desc: i18n.t('NoticeToEnum.ALL') }
  },
  AuditEnum: {
    AUDIT_OK: { value: 1, desc: i18n.t('AuditEnum.AUDIT_OK') },
    AUDIT_NO: { value: 0, desc: i18n.t('AuditEnum.AUDIT_NO') }
  },
  MenuTypeEnum: {
    MENU: { value: 0, desc: i18n.t('MenuTypeEnum.MENU') },
    MENU_CHILDREN: { value: 1, desc: i18n.t('MenuTypeEnum.MENU_CHILDREN') },
    PERMISSION: { value: 2, desc: i18n.t('MenuTypeEnum.PERMISSION') }
  },
  SexEnum: {
    WOMAN: { value: 0, desc: i18n.t('SexEnum.WOMAN') },
    MAN: { value: 1, desc: i18n.t('SexEnum.MAN') }
  },
  ElevatorComputerRoomEnum: {
    HAS_COMPUTER_ROOM: { value: 1, desc: i18n.t('ElevatorComputerRoomEnum.HAS_COMPUTER_ROOM') },
    NO_COMPUTER_ROOM: { value: 0, desc: i18n.t('ElevatorComputerRoomEnum.NO_COMPUTER_ROOM') }
  },
  ParkTypeEnum: {
    CAR_PARK: { value: 0, desc: '小车车位' },
    OTHER_PARK: { value: 1, desc: '其他车位' }
  },
  IsBuyEnum: {
    IS_BUY: { value: 1, desc: '已购买' },
    NO_BUY: { value: 0, desc: '未购买' }
  },
  IsLiveEnum: {
    IS_LIVE: { value: 1, desc: '已居住' },
    NO_LIVE: { value: 0, desc: '未居住' }
  }
}

export default enumInfo
