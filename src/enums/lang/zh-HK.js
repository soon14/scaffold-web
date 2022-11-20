const enumZhHK = {
  FeedbackTypeEnum: {
    REPAIR: '報修',
    COMPLAINT: '投訴',
    PROPOSAL: '建議'
  },
  FeedbackResultEnum: {
    UNRESOLVED: '未解决',
    RESOLVED: '已解决',
    OTHER: '其他'
  },
  OverdueEnum: {
    OVERDUE: '已過期',
    NO_OVERDUE: '未過期'
  },
  NoticeToEnum: {
    ALL_OWNER: '全體業主',
    ALL_USER: '全體員工',
    ALL: '全體人員'
  },
  AuditEnum: {
    AUDIT_OK: '已稽核',
    AUDIT_NO: '未稽核'
  },
  MenuTypeEnum: {
    MENU: '頂級選單',
    MENU_CHILDREN: '子功能表',
    PERMISSION: '許可權選單'
  },
  SexEnum: {
    WOMAN: '女',
    MAN: '男'
  },
  ElevatorComputerRoomEnum: {
    HAS_COMPUTER_ROOM: '有機房',
    NO_COMPUTER_ROOM: '無機房'
  }
}

export default enumZhHK
